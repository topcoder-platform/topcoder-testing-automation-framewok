import { browser, protractor } from "protractor";
import { logger } from "../../../../../logger/logger";
import { CommonHelper } from "../../../../utils/common-helper";

export class HomePageHelper {
  /**
   * Set the Homepage Object
   */

  public static setHomePage(homepage) {
    this.homePageObject = homepage;
  }

  /**
   * Verify the current page is the home page
   */
  public static async verifyHomePage() {
    const until = protractor.ExpectedConditions;
    await browser.wait(until.visibilityOf(this.homePageObject.container));
    CommonHelper.verifyCurrentUrl(this.homePageObject.homePageUrl);
    logger.info("User redirected to home-page");
  }

  private static homePageObject;
}
