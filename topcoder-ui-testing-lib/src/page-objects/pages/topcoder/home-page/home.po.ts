import { browser, protractor } from "protractor";
import { logger } from "../../../../../logger/logger";
import { ElementHelper } from "../../../../utils/element-helper";
export class HomePage {
  public homePageUrl;
  /**
   * Set Urls
   */
  public async setUrls(urlObject) {
    this.homePageUrl = urlObject.homePageUrl;
  }

  /**
   * Gets the home page container element
   */
  public get container() {
    return ElementHelper.getElementByClassName("home-top-wrapper");
  }
}
