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
var logger_1 = require("../../../../../logger/logger");
var common_helper_1 = require("../../../../utils/common-helper");
var login_constants_1 = require("./login.constants");
var LoginPageHelper = /** @class */ (function () {
    function LoginPageHelper() {
    }
    /**
     * Set the page object
     * @param {LoginPage} loginpage
     */
    LoginPageHelper.setLoginPage = function (loginpage) {
        this.loginPageObject = loginpage;
    };
    /**
     * Login
     * @param {String} username
     * @param {String} password
     */
    LoginPageHelper.login = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var homePage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, common_helper_1.CommonHelper.verifyCurrentUrl(this.loginPageObject.loginUrl)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loginPageObject.waitForLoginForm()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loginPageObject.fillLoginForm(username, password)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.loginPageObject.waitForHomePage()];
                    case 4:
                        homePage = _a.sent();
                        return [4 /*yield*/, this.verifyHomePage(homePage)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Login with invalid username
     * @param {String} invalidUsername
     * @param {String} password
     */
    LoginPageHelper.loginWithInvalidUserName = function (invalidUsername, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loginPageObject.waitForLoginForm()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.loginPageObject.fillLoginForm(invalidUsername, password)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.loginPageObject.waitForErrorMessage()];
                    case 3:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, this.loginPageObject.errorMessage.getText()];
                    case 4:
                        _a.apply(void 0, [_b.sent()]).toEqual(login_constants_1.LoginPageConstants.errors.MemberNotPresent);
                        logger_1.logger.info("Member not found error displayed");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Login with invalid password
     * @param {String} username
     * @param {String} invalidPassword
     */
    LoginPageHelper.loginWithInvalidPassword = function (username, invalidPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loginPageObject.waitForLoginForm()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.loginPageObject.fillLoginForm(username, invalidPassword)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.loginPageObject.waitForErrorMessage()];
                    case 3:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, this.loginPageObject.errorMessage.getText()];
                    case 4:
                        _a.apply(void 0, [_b.sent()]).toEqual(login_constants_1.LoginPageConstants.errors.InvalidPassword);
                        logger_1.logger.info("Invalid Password error message displayed");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Logout
     */
    LoginPageHelper.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var homePage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loginPageObject.logout();
                        return [4 /*yield*/, this.loginPageObject.waitForHomePage()];
                    case 1:
                        homePage = _a.sent();
                        return [4 /*yield*/, this.verifyHomePage(homePage)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Verify the current page is the home page
     * @param {HomePage} homePage
     */
    LoginPageHelper.verifyHomePage = function (homePage) {
        return __awaiter(this, void 0, void 0, function () {
            var until;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        return [4 /*yield*/, protractor_1.browser.wait(until.visibilityOf(homePage.container))];
                    case 1:
                        _a.sent();
                        common_helper_1.CommonHelper.verifyCurrentUrl(this.loginPageObject.homePageUrl);
                        logger_1.logger.info("User redirected to home-page");
                        return [2 /*return*/];
                }
            });
        });
    };
    return LoginPageHelper;
}());
exports.LoginPageHelper = LoginPageHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3BhZ2Utb2JqZWN0cy9wYWdlcy90b3Bjb2Rlci9sb2dpbi9sb2dpbi5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFpRDtBQUNqRCx1REFBc0Q7QUFDdEQsaUVBQStEO0FBRS9ELHFEQUF1RDtBQUd2RDtJQUFBO0lBK0VBLENBQUM7SUE5RUM7OztPQUdHO0lBQ1csNEJBQVksR0FBMUIsVUFBMkIsU0FBUztRQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNpQixxQkFBSyxHQUF6QixVQUEwQixRQUFnQixFQUFFLFFBQWdCOzs7Ozs0QkFDMUQscUJBQU0sNEJBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBbEUsU0FBa0UsQ0FBQzt3QkFDbkUscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBN0MsU0FBNkMsQ0FBQzt3QkFDOUMscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFBOzt3QkFBNUQsU0FBNEQsQ0FBQzt3QkFDNUMscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsRUFBQTs7d0JBQXZELFFBQVEsR0FBRyxTQUE0Qzt3QkFDN0QscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUM7Ozs7O0tBQ3JDO0lBRUQ7Ozs7T0FJRztJQUNpQix3Q0FBd0IsR0FBNUMsVUFDRSxlQUF1QixFQUN2QixRQUFnQjs7Ozs7NEJBRWhCLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQTdDLFNBQTZDLENBQUM7d0JBQzlDLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsRUFBQTs7d0JBQW5FLFNBQW1FLENBQUM7d0JBQ3BFLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLEVBQUUsRUFBQTs7d0JBQWhELFNBQWdELENBQUM7d0JBQ2pELEtBQUEsTUFBTSxDQUFBO3dCQUFDLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFBOzt3QkFBeEQsa0JBQU8sU0FBaUQsRUFBQyxDQUFDLE9BQU8sQ0FDL0Qsb0NBQWtCLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUMzQyxDQUFDO3dCQUNGLGVBQU0sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQzs7Ozs7S0FDakQ7SUFFRDs7OztPQUlHO0lBQ2lCLHdDQUF3QixHQUE1QyxVQUNFLFFBQWdCLEVBQ2hCLGVBQXVCOzs7Ozs0QkFFdkIscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBN0MsU0FBNkMsQ0FBQzt3QkFDOUMscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxFQUFBOzt3QkFBbkUsU0FBbUUsQ0FBQzt3QkFDcEUscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFBOzt3QkFBaEQsU0FBZ0QsQ0FBQzt3QkFDakQsS0FBQSxNQUFNLENBQUE7d0JBQUMscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUF4RCxrQkFBTyxTQUFpRCxFQUFDLENBQUMsT0FBTyxDQUMvRCxvQ0FBa0IsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUMxQyxDQUFDO3dCQUNGLGVBQU0sQ0FBQyxJQUFJLENBQUMsMENBQTBDLENBQUMsQ0FBQzs7Ozs7S0FDekQ7SUFFRDs7T0FFRztJQUNpQixzQkFBTSxHQUExQjs7Ozs7O3dCQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQ2IscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsRUFBQTs7d0JBQXZELFFBQVEsR0FBRyxTQUE0Qzt3QkFDN0QscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUM7Ozs7O0tBQ3JDO0lBRUQ7OztPQUdHO0lBQ2lCLDhCQUFjLEdBQWxDLFVBQW1DLFFBQWtCOzs7Ozs7d0JBQzdDLEtBQUssR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO3dCQUM1QyxxQkFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFBOzt3QkFBMUQsU0FBMEQsQ0FBQzt3QkFDM0QsNEJBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUNoRSxlQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7Ozs7O0tBQzdDO0lBR0gsc0JBQUM7QUFBRCxDQUFDLEFBL0VELElBK0VDO0FBL0VZLDBDQUFlIn0=