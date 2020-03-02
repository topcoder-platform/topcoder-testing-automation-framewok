var app = angular.module('reportingApp', []);

//<editor-fold desc="global helpers">

var isValueAnArray = function (val) {
    return Array.isArray(val);
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length - 1];
};
var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
    } else if (getSpec(item.description) !== getSpec(prevItem.description)) {
        item.displaySpecName = true;
    }
};

var getParent = function (str) {
    var arr = str.split('|');
    str = "";
    for (var i = arr.length - 2; i > 0; i--) {
        str += arr[i] + " > ";
    }
    return str.slice(0, -3);
};

var getShortDescription = function (str) {
    return str.split('|')[0];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};

var defaultSortFunction = function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) {
        return -1;
    }
    else if (a.sessionId > b.sessionId) {
        return 1;
    }

    if (a.timestamp < b.timestamp) {
        return -1;
    }
    else if (a.timestamp > b.timestamp) {
        return 1;
    }

    return 0;
};


//</editor-fold>

app.controller('ScreenshotReportController', function ($scope, $http) {
    var that = this;
    var clientDefaults = {};

    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true
    }, clientDefaults.searchSettings || {}); // enable customisation of search settings on first page hit

    this.warningTime = 1400;
    this.dangerTime = 1900;

    var initialColumnSettings = clientDefaults.columnSettings; // enable customisation of visible columns on first page hit
    if (initialColumnSettings) {
        if (initialColumnSettings.displayTime !== undefined) {
            // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
            this.displayTime = !initialColumnSettings.displayTime;
        }
        if (initialColumnSettings.displayBrowser !== undefined) {
            this.displayBrowser = !initialColumnSettings.displayBrowser; // same as above
        }
        if (initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId = !initialColumnSettings.displaySessionId; // same as above
        }
        if (initialColumnSettings.displayOS !== undefined) {
            this.displayOS = !initialColumnSettings.displayOS; // same as above
        }
        if (initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots = initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        } else {
            this.inlineScreenshots = false;
        }
        if (initialColumnSettings.warningTime) {
            this.warningTime = initialColumnSettings.warningTime;
        }
        if (initialColumnSettings.dangerTime){
            this.dangerTime = initialColumnSettings.dangerTime;
        }
    }

    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.isValueAnArray = function (val) {
        return isValueAnArray(val);
    };

    this.getParent = function (str) {
        return getParent(str);
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };

    this.getShortDescription = function (str) {
        return getShortDescription(str);
    };

    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh === 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number) / 1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {
                passCount++;
            }
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {
                pendingCount++;
            }
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {
                failCount++;
            }
        }
        return failCount;
    };

    this.passPerc = function () {
        return (this.passCount() / this.totalCount()) * 100;
    };
    this.pendingPerc = function () {
        return (this.pendingCount() / this.totalCount()) * 100;
    };
    this.failPerc = function () {
        return (this.failCount() / this.totalCount()) * 100;
    };
    this.totalCount = function () {
        return this.passCount() + this.failCount() + this.pendingCount();
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };

    var results = [
    {
        "description": "should Verify User can login using valid credentials|Topcoder Login Page Tests: ",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3775,
        "browser": {
            "name": "chrome",
            "version": "80.0.3987.116"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "screenshots/00a70082-00f3-0009-001b-00c7006c00c5.png",
        "timestamp": 1582540173463,
        "duration": 14743
    },
    {
        "description": "should Verify User cannot login using invalid username|Topcoder Login Page Tests: ",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3775,
        "browser": {
            "name": "chrome",
            "version": "80.0.3987.116"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "screenshots/009500d6-0075-00db-0047-004500390060.png",
        "timestamp": 1582540188751,
        "duration": 3981
    },
    {
        "description": "should Verify User cannot login using invalid password|Topcoder Login Page Tests: ",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3775,
        "browser": {
            "name": "chrome",
            "version": "80.0.3987.116"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "screenshots/00a7008f-003a-0023-00ee-0047005700d7.png",
        "timestamp": 1582540193288,
        "duration": 6206
    },
    {
        "description": "should Verify User can logout|Topcoder Login Page Tests: ",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3775,
        "browser": {
            "name": "chrome",
            "version": "80.0.3987.116"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "screenshots/006600a8-002a-0000-00a4-00eb00a900bb.png",
        "timestamp": 1582540200050,
        "duration": 9832
    },
    {
        "description": "should Verify User can Add/Update/Delete Subscriptions|Topcoder Tools Page Tests: ",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3775,
        "browser": {
            "name": "chrome",
            "version": "80.0.3987.116"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://accounts.topcoder-dev.com/app.29ca52a25fe2b420355c.js 11:4207 \"Warning: It looks like you're using a minified copy of the development build of React. When deploying React apps to production, make sure to use the production build which skips development warnings and is faster. See https://fb.me/react-minification for more details.\"",
                "timestamp": 1582540213881,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://accounts.topcoder-dev.com/app.29ca52a25fe2b420355c.js 47:18175 \"Warning: Accessing createClass via the main React package is deprecated, and will be removed in React v16.0. Use a plain JavaScript class instead. If you're not yet ready to migrate, create-react-class v15.* is available on npm as a temporary, drop-in replacement. For more info see https://fb.me/react-create-class\"",
                "timestamp": 1582540213885,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://accounts.topcoder-dev.com/app.29ca52a25fe2b420355c.js 47:18175 \"Warning: Accessing PropTypes via the main React package is deprecated, and will be removed in  React v16.0. Use the latest available v15.* prop-types package from npm instead. For info on usage, compatibility, migration and more, see https://fb.me/prop-types-docs\"",
                "timestamp": 1582540213885,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://accounts.topcoder-dev.com/app.29ca52a25fe2b420355c.js 436:24688 \"You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build.\"",
                "timestamp": 1582540213913,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://accounts.topcoder-dev.com/member 0:0 Uncaught (in promise)",
                "timestamp": 1582540214206,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://accounts.topcoder-dev.com/member - A cookie associated with a cross-site resource at http://www.facebook.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.",
                "timestamp": 1582540217258,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://www.topcoder-dev.com/ - A cookie associated with a cross-site resource at http://www.facebook.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.",
                "timestamp": 1582540222762,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://www.topcoder-dev.com/ - A cookie associated with a cross-site resource at http://ads.linkedin.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.",
                "timestamp": 1582540222770,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://www.topcoder-dev.com/ - A cookie associated with a cross-site resource at http://vimeo.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.",
                "timestamp": 1582540223114,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.topcoder-dev.com/ - Access to font at 'https://www.topcoder.com/wp-content/themes/tc3-marketing/nav/font/barlow-condensed-v3-latin/barlow-condensed-v3-latin-600.woff2' from origin 'https://www.topcoder-dev.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.",
                "timestamp": 1582540223195,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.topcoder.com/wp-content/themes/tc3-marketing/nav/font/barlow-condensed-v3-latin/barlow-condensed-v3-latin-600.woff2 - Failed to load resource: net::ERR_FAILED",
                "timestamp": 1582540223195,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://fast.trychameleon.com/messo/SAcpvabiB6Vsb9yZm32REVpDemzhOjyY6iznnOufjNlqyk-1DPhtq-A61ZuE9U5MrO1WGx/messo.min.js 0:3143 \"Chameleon Error: No \\\"Unique ID\\\" passed to Identify. The \\\"Unique ID\\\" informs Chameleon who this user is across sessions.\\n  Call chmln.identify(Unique ID, { user traits });\\n  See https://support.trychameleon.com/docs/getting-started for more information.\"",
                "timestamp": 1582540223229,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.topcoder-dev.com/ - Access to font at 'https://www.topcoder.com/wp-content/themes/tc3-marketing/nav/font/barlow-condensed-v3-latin/barlow-condensed-v3-latin-600.woff' from origin 'https://www.topcoder-dev.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.",
                "timestamp": 1582540223519,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.topcoder.com/wp-content/themes/tc3-marketing/nav/font/barlow-condensed-v3-latin/barlow-condensed-v3-latin-600.woff - Failed to load resource: net::ERR_FAILED",
                "timestamp": 1582540223519,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.topcoder-dev.com/ - Access to font at 'https://www.topcoder.com/wp-content/themes/tc3-marketing/nav/font/barlow-condensed-v3-latin/barlow-condensed-v3-latin-600.ttf' from origin 'https://www.topcoder-dev.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.",
                "timestamp": 1582540223764,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.topcoder.com/wp-content/themes/tc3-marketing/nav/font/barlow-condensed-v3-latin/barlow-condensed-v3-latin-600.ttf - Failed to load resource: net::ERR_FAILED",
                "timestamp": 1582540223764,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://qa-community-app.topcoder-dev.com/settings/tools - A cookie associated with a cross-site resource at http://www.facebook.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.",
                "timestamp": 1582540228426,
                "type": ""
            }
        ],
        "screenShotFile": "screenshots/003d0080-0038-007a-0051-00d2006c0091.png",
        "timestamp": 1582540225778,
        "duration": 21493
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.loadResultsViaAjax = function () {

        $http({
            url: './combined.json',
            method: 'GET'
        }).then(function (response) {
                var data = null;
                if (response && response.data) {
                    if (typeof response.data === 'object') {
                        data = response.data;
                    } else if (response.data[0] === '"') { //detect super escaped file (from circular json)
                        data = CircularJSON.parse(response.data); //the file is escaped in a weird way (with circular json)
                    }
                    else {
                        data = JSON.parse(response.data);
                    }
                }
                if (data) {
                    results = data;
                    that.sortSpecs();
                }
            },
            function (error) {
                console.error(error);
            });
    };


    if (clientDefaults.useAjax) {
        this.loadResultsViaAjax();
    } else {
        this.sortSpecs();
    }


});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        if (!items) {
            return filtered; // to avoid crashing in where results might be empty
        }
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            var isHit = false; //is set to true if any of the search criteria matched
            countLogMessages(item); // modifies item contents

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    isHit = true;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    isHit = true;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    isHit = true;
                }
            }
            if (isHit) {
                checkIfShouldDisplaySpecName(prevItem, item);

                filtered.push(item);
                prevItem = item;
            }
        }

        return filtered;
    };
});

