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
var config_helper_js_1 = require("../../../../utils/config-helper.js");
var element_helper_1 = require("../../../../utils/element-helper");
var home_po_js_1 = require("../home-page/home.po.js");
var login_constants_1 = require("./login.constants");
var LoginPage = /** @class */ (function () {
    function LoginPage() {
    }
    /**
     * Get login page
     */
    LoginPage.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.get(login_constants_1.LoginPageConstants.url)];
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
                        return [4 /*yield*/, protractor_1.browser.get(config_helper_js_1.ConfigHelper.getLogoutURL())];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ucG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvcGFnZS1vYmplY3RzL3BhZ2VzL3RvcGNvZGVyL2xvZ2luL2xvZ2luLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBOEQ7QUFDOUQsMERBQTREO0FBQzVELHVEQUFzRDtBQUN0RCx1RUFBa0U7QUFDbEUsbUVBQWlFO0FBQ2pFLHNEQUFtRDtBQUNuRCxxREFBdUQ7QUFFdkQ7SUFBQTtJQWlIQSxDQUFDO0lBaEhDOztPQUVHO0lBQ1UsdUJBQUcsR0FBaEI7Ozs7NEJBQ0UscUJBQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0NBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUE7O3dCQUF6QyxTQUF5QyxDQUFDO3dCQUMxQyxxQkFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLEVBQUE7O3dCQUExRCxTQUEwRCxDQUFDOzs7OztLQUM1RDtJQUtELHNCQUFXLGdDQUFTO1FBSHBCOztXQUVHO2FBQ0g7WUFDRSxPQUFPLDhCQUFhLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEQsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVyxvQ0FBYTtRQUh4Qjs7V0FFRzthQUNIO1lBQ0UsT0FBTyw4QkFBYSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTtJQUtELHNCQUFXLG9DQUFhO1FBSHhCOztXQUVHO2FBQ0g7WUFDRSxPQUFPLDhCQUFhLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzRCxDQUFDOzs7T0FBQTtJQUtELHNCQUFXLGtDQUFXO1FBSHRCOztXQUVHO2FBQ0g7WUFDRSxPQUFPLDhCQUFhLENBQUMsZUFBZSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDbEUsQ0FBQzs7O09BQUE7SUFLRCxz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