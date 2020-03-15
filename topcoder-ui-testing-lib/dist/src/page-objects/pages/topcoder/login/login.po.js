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
var appconfig = require("../../../../../app-config.json");
var logger_1 = require("../../../../../logger/logger");
var element_helper_1 = require("../../../../utils/element-helper");
var home_po_js_1 = require("../home-page/home.po.js");
var LoginPage = /** @class */ (function () {
    function LoginPage() {
    }
    /**
     * Set Urls
     */
    LoginPage.prototype.setUrls = function (urlObject) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loginUrl = urlObject.loginUrl;
                this.homePageUrl = urlObject.homePageUrl;
                this.logoutUrl = urlObject.logoutUrl;
                return [2 /*return*/];
            });
        });
    };
    /**
     * Get login page
     */
    LoginPage.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.get(this.loginUrl)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, logger_1.logger.info("User navigated to Topcoder Login Page")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(LoginPage.prototype, "loginForm", {
        /**
         * Get login form
         */
        get: function () {
            return element_helper_1.ElementHelper.getElementByName("vm.loginForm");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "userNameField", {
        /**
         * Get Username field
         */
        get: function () {
            return element_helper_1.ElementHelper.getElementById("username");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "passwordField", {
        /**
         * Get Password field
         */
        get: function () {
            return element_helper_1.ElementHelper.getElementByName("currentPassword");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "loginButton", {
        /**
         * Get Login button
         */
        get: function () {
            return element_helper_1.ElementHelper.getElementByCss("button[type = 'submit']");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "errorMessage", {
        /**
         * Get Error message
         */
        get: function () {
            return element_helper_1.ElementHelper.getElementByClassName("form-error");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Logout the user
     */
    LoginPage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.ignoreSynchronization = true;
                        return [4 /*yield*/, protractor_1.browser.get(this.logoutUrl)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, logger_1.logger.info("user logged out")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Wait for the login form to be displayed
     */
    LoginPage.prototype.waitForLoginForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var until;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        return [4 /*yield*/, protractor_1.browser.wait(until.visibilityOf(this.loginForm), appconfig.Timeout.ElementVisibility)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, logger_1.logger.info("Login Form Displayed")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fill and submit the login form
     */
    LoginPage.prototype.fillLoginForm = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var until;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.userNameField), appconfig.Timeout.ElementVisibility)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.userNameField.sendKeys(username)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.passwordField.sendKeys(password)];
                    case 3:
                        _a.sent();
                        logger_1.logger.info("Login form filled with values: username - " +
                            username +
                            ", password - " +
                            password);
                        protractor_1.browser.ignoreSynchronization = true;
                        return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.loginButton))];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.loginButton.click()];
                    case 5:
                        _a.sent();
                        logger_1.logger.info("Submitted login form");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Wait for home page to be displayed
     */
    LoginPage.prototype.waitForHomePage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var until, homepage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        homepage = new home_po_js_1.HomePage();
                        return [4 /*yield*/, protractor_1.browser.wait(until.visibilityOf(homepage.container), appconfig.Timeout.PageLoad, "Element did not display within timoeout")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, homepage];
                }
            });
        });
    };
    /**
     * Wait for error message to be displayed
     */
    LoginPage.prototype.waitForErrorMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var until;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        return [4 /*yield*/, protractor_1.browser.wait(until.visibilityOf(this.errorMessage), appconfig.Timeout.ElementVisibility, "Element did not display within 90 seconds")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ucG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvcGFnZS1vYmplY3RzL3BhZ2VzL3RvcGNvZGVyL2xvZ2luL2xvZ2luLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBOEQ7QUFDOUQsMERBQTREO0FBQzVELHVEQUFzRDtBQUN0RCxtRUFBaUU7QUFDakUsc0RBQW1EO0FBRW5EO0lBQUE7SUE2SEEsQ0FBQztJQXhIQzs7T0FFRztJQUNVLDJCQUFPLEdBQXBCLFVBQXFCLFNBQVM7OztnQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQzs7OztLQUN0QztJQUNEOztPQUVHO0lBQ1UsdUJBQUcsR0FBaEI7Ozs7NEJBQ0UscUJBQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBaEMsU0FBZ0MsQ0FBQzt3QkFDakMscUJBQU0sZUFBTSxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxFQUFBOzt3QkFBMUQsU0FBMEQsQ0FBQzs7Ozs7S0FDNUQ7SUFLRCxzQkFBVyxnQ0FBUztRQUhwQjs7V0FFRzthQUNIO1lBQ0UsT0FBTyw4QkFBYSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsb0NBQWE7UUFIeEI7O1dBRUc7YUFDSDtZQUNFLE9BQU8sOEJBQWEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVyxvQ0FBYTtRQUh4Qjs7V0FFRzthQUNIO1lBQ0UsT0FBTyw4QkFBYSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0QsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVyxrQ0FBVztRQUh0Qjs7V0FFRzthQUNIO1lBQ0UsT0FBTyw4QkFBYSxDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsbUNBQVk7UUFIdkI7O1dBRUc7YUFDSDtZQUNFLE9BQU8sOEJBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCxDQUFDOzs7T0FBQTtJQUVEOztPQUVHO0lBQ1UsMEJBQU0sR0FBbkI7Ozs7O3dCQUNFLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO3dCQUNyQyxxQkFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUFqQyxTQUFpQyxDQUFDO3dCQUNsQyxxQkFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUE7O3dCQUFwQyxTQUFvQyxDQUFDOzs7OztLQUN0QztJQUVEOztPQUVHO0lBQ1Usb0NBQWdCLEdBQTdCOzs7Ozs7d0JBQ1EsS0FBSyxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7d0JBQzVDLHFCQUFNLG9CQUFPLENBQUMsSUFBSSxDQUNoQixLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFDbEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDcEMsRUFBQTs7d0JBSEQsU0FHQyxDQUFDO3dCQUNGLHFCQUFNLGVBQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBQTs7d0JBQXpDLFNBQXlDLENBQUM7Ozs7O0tBQzNDO0lBRUQ7O09BRUc7SUFDVSxpQ0FBYSxHQUExQixVQUEyQixRQUFRLEVBQUUsUUFBUTs7Ozs7O3dCQUNyQyxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDNUMscUJBQU0sb0JBQU8sQ0FBQyxJQUFJLENBQ2hCLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUNwQyxTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUNwQyxFQUFBOzt3QkFIRCxTQUdDLENBQUM7d0JBQ0YscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUEzQyxTQUEyQyxDQUFDO3dCQUM1QyxxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQTNDLFNBQTJDLENBQUM7d0JBQzVDLGVBQU0sQ0FBQyxJQUFJLENBQ1QsNENBQTRDOzRCQUMxQyxRQUFROzRCQUNSLGVBQWU7NEJBQ2YsUUFBUSxDQUNYLENBQUM7d0JBQ0Ysb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7d0JBQ3JDLHFCQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQTs7d0JBQWhFLFNBQWdFLENBQUM7d0JBQ2pFLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFDO3dCQUMvQixlQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7Ozs7O0tBQ3JDO0lBRUQ7O09BRUc7SUFDVSxtQ0FBZSxHQUE1Qjs7Ozs7O3dCQUNRLEtBQUssR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO3dCQUN0QyxRQUFRLEdBQUcsSUFBSSxxQkFBUSxFQUFFLENBQUM7d0JBQ2hDLHFCQUFNLG9CQUFPLENBQUMsSUFBSSxDQUNoQixLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDdEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQzFCLHlDQUF5QyxDQUMxQyxFQUFBOzt3QkFKRCxTQUlDLENBQUM7d0JBQ0Ysc0JBQU8sUUFBUSxFQUFDOzs7O0tBQ2pCO0lBRUQ7O09BRUc7SUFDVSx1Q0FBbUIsR0FBaEM7Ozs7Ozt3QkFDUSxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDNUMscUJBQU0sb0JBQU8sQ0FBQyxJQUFJLENBQ2hCLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUNyQyxTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUNuQywyQ0FBMkMsQ0FDNUMsRUFBQTs7d0JBSkQsU0FJQyxDQUFDOzs7OztLQUNIO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBN0hELElBNkhDO0FBN0hZLDhCQUFTIn0=