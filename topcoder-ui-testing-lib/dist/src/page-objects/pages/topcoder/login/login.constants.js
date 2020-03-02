"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_helper_1 = require("../../../../utils/config-helper");
var LoginPageConstants = /** @class */ (function () {
    function LoginPageConstants() {
    }
    Object.defineProperty(LoginPageConstants, "url", {
        /**
         * Get login URL
         */
        get: function () {
            return config_helper_1.ConfigHelper.getLoginURL();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPageConstants, "errors", {
        /**
         * Error messages
         */
        get: function () {
            return {
                InvalidPassword: "That password is incorrect. Please check that you entered the right one.",
                MemberNotPresent: "We couldn't find a member with that username. Please check that you entered it correctly."
            };
        },
        enumerable: true,
        configurable: true
    });
    return LoginPageConstants;
}());
exports.LoginPageConstants = LoginPageConstants;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3BhZ2Utb2JqZWN0cy9wYWdlcy90b3Bjb2Rlci9sb2dpbi9sb2dpbi5jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpRUFBK0Q7QUFFL0Q7SUFBQTtJQW1CQSxDQUFDO0lBZkMsc0JBQVcseUJBQUc7UUFIZDs7V0FFRzthQUNIO1lBQ0UsT0FBTyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsNEJBQU07UUFIakI7O1dBRUc7YUFDSDtZQUNFLE9BQU87Z0JBQ0wsZUFBZSxFQUNiLDBFQUEwRTtnQkFDNUUsZ0JBQWdCLEVBQ2QsMkZBQTJGO2FBQzlGLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQW5CWSxnREFBa0IifQ==