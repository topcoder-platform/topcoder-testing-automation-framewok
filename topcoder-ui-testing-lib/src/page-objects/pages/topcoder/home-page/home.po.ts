import { browser, protractor } from "protractor";
import { logger } from "../../../../../logger/logger";
import { CommonHelper } from "../../../../utils/common-helper";
import { ElementHelper } from "../../../../utils/element-helper";
import { HomePageConstants } from "./home.constants";

export class HomePage {
  /**
   * Gets the home page container element
   */
  public get container() {
    return ElementHelper.getElementByClassName("home-top-wrapper");
  }

  /**
   * Gets the home page
   */
  public async get() {
    await browser.get(HomePageConstants.url);
    logger.info("User navigated to Home Page");
  }
}
