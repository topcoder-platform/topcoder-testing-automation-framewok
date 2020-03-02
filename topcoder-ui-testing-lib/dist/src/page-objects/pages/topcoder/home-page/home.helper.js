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
var home_constants_1 = require("./home.constants");
var HomePageHelper = /** @class */ (function () {
    function HomePageHelper() {
    }
    /**
     * Set the Homepage Object
     */
    HomePageHelper.setHomePage = function (homepage) {
        this.homePageObject = homepage;
    };
    /**
     * Verify the current page is the home page
     */
    HomePageHelper.verifyHomePage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var until;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        return [4 /*yield*/, protractor_1.browser.wait(until.visibilityOf(this.homePageObject.container))];
                    case 1:
                        _a.sent();
                        common_helper_1.CommonHelper.verifyCurrentUrl(home_constants_1.HomePageConstants.url);
                        logger_1.logger.info("User redirected to home-page");
                        return [2 /*return*/];
                }
            });
        });
    };
    return HomePageHelper;
}());
exports.HomePageHelper = HomePageHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvcGFnZS1vYmplY3RzL3BhZ2VzL3RvcGNvZGVyL2hvbWUtcGFnZS9ob21lLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQWlEO0FBQ2pELHVEQUFzRDtBQUN0RCxpRUFBK0Q7QUFFL0QsbURBQXFEO0FBRXJEO0lBQUE7SUFvQkEsQ0FBQztJQW5CQzs7T0FFRztJQUVXLDBCQUFXLEdBQXpCLFVBQTBCLFFBQVE7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ2lCLDZCQUFjLEdBQWxDOzs7Ozs7d0JBQ1EsS0FBSyxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7d0JBQzVDLHFCQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFBOzt3QkFBckUsU0FBcUUsQ0FBQzt3QkFDdEUsNEJBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxrQ0FBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDckQsZUFBTSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDOzs7OztLQUM3QztJQUdILHFCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSx3Q0FBYyJ9