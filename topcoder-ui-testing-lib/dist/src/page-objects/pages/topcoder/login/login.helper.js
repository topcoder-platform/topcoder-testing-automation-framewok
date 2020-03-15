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
var logger_1 = require("../../../../../logger/logger");
var common_helper_1 = require("../../../../utils/common-helper");
var home_helper_1 = require("../home-page/home.helper");
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
            var homepage, homePageUrl;
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
                        homepage = _a.sent();
                        homePageUrl = this.loginPageObject.homePageUrl;
                        return [4 /*yield*/, homepage.setUrls({ homePageUrl: homePageUrl })];
                    case 5:
                        _a.sent();
                        home_helper_1.HomePageHelper.setHomePage(homepage);
                        return [4 /*yield*/, home_helper_1.HomePageHelper.verifyHomePage()];
                    case 6:
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
            var homepage, homePageUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loginPageObject.logout();
                        return [4 /*yield*/, this.loginPageObject.waitForHomePage()];
                    case 1:
                        homepage = _a.sent();
                        homePageUrl = this.loginPageObject.homePageUrl;
                        homepage.setUrls({ homePageUrl: homePageUrl });
                        home_helper_1.HomePageHelper.setHomePage(homepage);
                        return [4 /*yield*/, home_helper_1.HomePageHelper.verifyHomePage()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return LoginPageHelper;
}());
exports.LoginPageHelper = LoginPageHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3BhZ2Utb2JqZWN0cy9wYWdlcy90b3Bjb2Rlci9sb2dpbi9sb2dpbi5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCxpRUFBK0Q7QUFDL0Qsd0RBQTBEO0FBQzFELHFEQUF1RDtBQUd2RDtJQUFBO0lBMEVBLENBQUM7SUF6RUM7OztPQUdHO0lBQ1csNEJBQVksR0FBMUIsVUFBMkIsU0FBUztRQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNpQixxQkFBSyxHQUF6QixVQUEwQixRQUFnQixFQUFFLFFBQWdCOzs7Ozs0QkFDMUQscUJBQU0sNEJBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBbEUsU0FBa0UsQ0FBQzt3QkFDbkUscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBN0MsU0FBNkMsQ0FBQzt3QkFDOUMscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFBOzt3QkFBNUQsU0FBNEQsQ0FBQzt3QkFDNUMscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsRUFBQTs7d0JBQXZELFFBQVEsR0FBRyxTQUE0Qzt3QkFDdkQsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO3dCQUNyRCxxQkFBTSxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQyxFQUFBOzt3QkFBdkMsU0FBdUMsQ0FBQzt3QkFDeEMsNEJBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3JDLHFCQUFNLDRCQUFjLENBQUMsY0FBYyxFQUFFLEVBQUE7O3dCQUFyQyxTQUFxQyxDQUFDOzs7OztLQUN2QztJQUVEOzs7O09BSUc7SUFDaUIsd0NBQXdCLEdBQTVDLFVBQ0UsZUFBdUIsRUFDdkIsUUFBZ0I7Ozs7OzRCQUVoQixxQkFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUE3QyxTQUE2QyxDQUFDO3dCQUM5QyxxQkFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLEVBQUE7O3dCQUFuRSxTQUFtRSxDQUFDO3dCQUNwRSxxQkFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixFQUFFLEVBQUE7O3dCQUFoRCxTQUFnRCxDQUFDO3dCQUNqRCxLQUFBLE1BQU0sQ0FBQTt3QkFBQyxxQkFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQXhELGtCQUFPLFNBQWlELEVBQUMsQ0FBQyxPQUFPLENBQy9ELG9DQUFrQixDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FDM0MsQ0FBQzt3QkFDRixlQUFNLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7Ozs7O0tBQ2pEO0lBRUQ7Ozs7T0FJRztJQUNpQix3Q0FBd0IsR0FBNUMsVUFDRSxRQUFnQixFQUNoQixlQUF1Qjs7Ozs7NEJBRXZCLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQTdDLFNBQTZDLENBQUM7d0JBQzlDLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsRUFBQTs7d0JBQW5FLFNBQW1FLENBQUM7d0JBQ3BFLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLEVBQUUsRUFBQTs7d0JBQWhELFNBQWdELENBQUM7d0JBQ2pELEtBQUEsTUFBTSxDQUFBO3dCQUFDLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFBOzt3QkFBeEQsa0JBQU8sU0FBaUQsRUFBQyxDQUFDLE9BQU8sQ0FDL0Qsb0NBQWtCLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDMUMsQ0FBQzt3QkFDRixlQUFNLENBQUMsSUFBSSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7Ozs7O0tBQ3pEO0lBRUQ7O09BRUc7SUFDaUIsc0JBQU0sR0FBMUI7Ozs7Ozt3QkFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNiLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLEVBQUE7O3dCQUF2RCxRQUFRLEdBQUcsU0FBNEM7d0JBQ3ZELFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQzt3QkFDckQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsQ0FBQzt3QkFDbEMsNEJBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3JDLHFCQUFNLDRCQUFjLENBQUMsY0FBYyxFQUFFLEVBQUE7O3dCQUFyQyxTQUFxQyxDQUFDOzs7OztLQUN2QztJQUdILHNCQUFDO0FBQUQsQ0FBQyxBQTFFRCxJQTBFQztBQTFFWSwwQ0FBZSJ9