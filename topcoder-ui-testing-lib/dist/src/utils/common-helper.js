"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var logger_1 = require("../../logger/logger");
var element_helper_1 = require("./element-helper");
exports.CommonHelper = {
    /**
     * Click on an element containing text
     * @param {String} text
     */
    clickOnElementContainingText: function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = element_helper_1.ElementHelper.getElementContainingText(text);
                        return [4 /*yield*/, element.click()];
                    case 1:
                        _a.sent();
                        logger_1.logger.info("Clicked on element containing text " + text);
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Click on a html tag element containing text
     * @param {String} tag
     * @param {String} text
     */
    clickOnTagElementContainingText: function (tag, text) {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = element_helper_1.ElementHelper.getTagElementContainingText(tag, text);
                        return [4 /*yield*/, element.click()];
                    case 1:
                        _a.sent();
                        logger_1.logger.info("Clicked on " + tag + " element containing text " + text);
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Verify page title
     * @param {String} title
     */
    verifyPageTitle: function (title) {
        return __awaiter(this, void 0, void 0, function () {
            var pageTitle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.getTitle()];
                    case 1:
                        pageTitle = _a.sent();
                        logger_1.logger.info("Current page title is " + pageTitle);
                        expect(pageTitle).toEqual(title, "Provided title " + title + " does not match page title " + pageTitle);
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Verify page url
     * @param {String} url
     */
    verifyCurrentUrl: function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                    case 1:
                        currentUrl = _a.sent();
                        logger_1.logger.info("Current page url is " + currentUrl);
                        expect(url).toEqual(currentUrl, "Provided url " + url + " does not match current url " + currentUrl);
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Verify pop window exists
     */
    verifyPopupWindow: function () {
        return __awaiter(this, void 0, void 0, function () {
            var windows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.getAllWindowHandles()];
                    case 1:
                        windows = _a.sent();
                        expect(windows.length).toBe(2, "Popup window did not open");
                        return [4 /*yield*/, protractor_1.browser.switchTo().window(windows[1])];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.close()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.switchTo().window(windows[0])];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Verify pop up window's title
     * @param {String} title
     */
    verifyPopupWindowWithTitle: function (title) {
        return __awaiter(this, void 0, void 0, function () {
            var windows, until, windowTitle, popupWindowTitle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.verifyPopupWindow()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.getAllWindowHandles()];
                    case 2:
                        windows = _a.sent();
                        until = protractor_1.protractor.ExpectedConditions;
                        windowTitle = element_helper_1.ElementHelper.getElementByXPath("//title");
                        protractor_1.browser.ignoreSynchronization = true;
                        return [4 /*yield*/, protractor_1.browser.switchTo().window(windows[1])];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(windowTitle))];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.getTitle()];
                    case 5:
                        popupWindowTitle = _a.sent();
                        expect(popupWindowTitle).toEqual(title, "Provided title " + title + " does not match page title " + popupWindowTitle);
                        return [4 /*yield*/, protractor_1.browser.close()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.switchTo().window(windows[0])];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Verify pop up window's url
     * @param {String} expectedUrl
     */
    verifyPopupWindowWithUrl: function (expectedUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var windows, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.verifyPopupWindow()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.getAllWindowHandles()];
                    case 2:
                        windows = _a.sent();
                        return [4 /*yield*/, protractor_1.browser.switchTo().window(windows[1])];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                    case 4:
                        url = _a.sent();
                        expect(url).toEqual(expectedUrl, "Provided url " + expectedUrl + " does not match current url " + url);
                        return [4 /*yield*/, protractor_1.browser.close()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.switchTo().window(windows[0])];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Get anchor element containing text and verify the href in that element
     * @param {String} text
     * @param {String} href
     */
    verifyHrefInAnchorContainingText: function (text, href) {
        return __awaiter(this, void 0, void 0, function () {
            var anchorElement, anchorElementHref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        anchorElement = element_helper_1.ElementHelper.getTagElementContainingText("a", text);
                        return [4 /*yield*/, anchorElement.getAttribute("href")];
                    case 1:
                        anchorElementHref = _a.sent();
                        expect(anchorElementHref).toEqual(href, "Provided href " + href + " does not match anchor element href " + anchorElementHref);
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Switch tab by opening tab and optionally verify header of new tab
     * @param {String} tag
     * @param {String} text
     * @param {String|Null} newTabHeaderTag
     * @param {String|Null} newTabHeaderText
     */
    switchTabByClickingOnTagWithText: function (tag, text, newTabHeaderTag, newTabHeaderText) {
        if (newTabHeaderTag === void 0) { newTabHeaderTag = null; }
        if (newTabHeaderText === void 0) { newTabHeaderText = null; }
        return __awaiter(this, void 0, void 0, function () {
            var until, headerElement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        return [4 /*yield*/, element_helper_1.ElementHelper.getTagElementContainingText(tag, text).click()];
                    case 1:
                        _a.sent();
                        if (!newTabHeaderTag || !newTabHeaderText) {
                            // Don't verify header if not given
                            return [2 /*return*/];
                        }
                        headerElement = element_helper_1.ElementHelper.getTagElementContainingText(newTabHeaderTag, newTabHeaderText);
                        return [4 /*yield*/, protractor_1.browser.wait(until.visibilityOf(headerElement))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Await visibility of element
     * @param {Element} element
     */
    awaitVisibility: function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var until;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        return [4 /*yield*/, protractor_1.browser.wait(until.visibilityOf(element), 5000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9jb21tb24taGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBaUQ7QUFDakQsOENBQTZDO0FBQzdDLG1EQUFpRDtBQUNwQyxRQUFBLFlBQVksR0FBRztJQUMxQjs7O09BR0c7SUFDRyw0QkFBNEIsWUFBQyxJQUFJOzs7Ozs7d0JBQy9CLE9BQU8sR0FBRyw4QkFBYSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUM3RCxxQkFBTSxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUFyQixTQUFxQixDQUFDO3dCQUN0QixlQUFNLENBQUMsSUFBSSxDQUFDLHdDQUFzQyxJQUFNLENBQUMsQ0FBQzs7Ozs7S0FDM0Q7SUFFRDs7OztPQUlHO0lBQ0csK0JBQStCLFlBQUMsR0FBRyxFQUFFLElBQUk7Ozs7Ozt3QkFDdkMsT0FBTyxHQUFHLDhCQUFhLENBQUMsMkJBQTJCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNyRSxxQkFBTSxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUFyQixTQUFxQixDQUFDO3dCQUN0QixlQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFjLEdBQUcsaUNBQTRCLElBQU0sQ0FBQyxDQUFDOzs7OztLQUNsRTtJQUVEOzs7T0FHRztJQUNHLGVBQWUsWUFBQyxLQUFLOzs7Ozs0QkFDUCxxQkFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBcEMsU0FBUyxHQUFHLFNBQXdCO3dCQUMxQyxlQUFNLENBQUMsSUFBSSxDQUFDLDJCQUF5QixTQUFXLENBQUMsQ0FBQzt3QkFDbEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FDdkIsS0FBSyxFQUNMLG9CQUFrQixLQUFLLG1DQUE4QixTQUFX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