import { ConfigHelper } from "../../../../utils/config-helper";

export class LoginPageConstants {
  /**
   * Get login URL
   */
  static get url() {
    return ConfigHelper.getLoginURL();
  }

  /**
   * Error messages
   */
  static get errors() {
    return {
      InvalidPassword:
        "That password is incorrect. Please check that you entered the right one.",
      MemberNotPresent:
        "We couldn't find a member with that username. Please check that you entered it correctly."
    };
  }
}
