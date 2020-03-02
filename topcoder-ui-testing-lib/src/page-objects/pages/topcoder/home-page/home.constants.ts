import { CommonHelper } from "../../../../utils/common-helper";
import { ConfigHelper } from "../../../../utils/config-helper";

export class HomePageConstants {
  /**
   * Get homepage URL
   */
  static get url() {
    return ConfigHelper.getHomePageURL();
  }
}
