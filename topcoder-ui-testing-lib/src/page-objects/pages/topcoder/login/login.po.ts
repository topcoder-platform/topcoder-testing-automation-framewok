import { browser, by, element, protractor } from "protractor";
import * as appconfig from "../../../../../app-config.json";
import { logger } from "../../../../../logger/logger";
import { ElementHelper } from "../../../../utils/element-helper";
import { HomePage } from "../home-page/home.po.js";

export class LoginPage {
  public loginUrl;
  public homePageUrl;
  public logoutUrl;

  /**
   * Set Urls
   */
  public async setUrls(urlObject) {
    this.loginUrl = urlObject.loginUrl;
    this.homePageUrl = urlObject.homePageUrl;
    this.logoutUrl = urlObject.logoutUrl;
  }
  /**
   * Get login page
   */
  public async get() {
    await browser.get(this.loginUrl);
    await logger.info("User navigated to Topcoder Login Page");
  }

  /**
   * Get login form
   */
  public get loginForm() {
    return ElementHelper.getElementByName("vm.loginForm");
  }

  /**
   * Get Username field
   */
  public get userNameField() {
    return ElementHelper.getElementById("username");
  }

  /**
   * Get Password field
   */
  public get passwordField() {
    return ElementHelper.getElementByName("currentPassword");
  }

  /**
   * Get Login button
   */
  public get loginButton() {
    return ElementHelper.getElementByCss("button[type = 'submit']");
  }

  /**
   * Get Error message
   */
  public get errorMessage() {
    return ElementHelper.getElementByClassName("form-error");
  }

  /**
   * Logout the user
   */
  public async logout() {
    browser.ignoreSynchronization = true;
    await browser.get(this.logoutUrl);
    await logger.info("user logged out");
  }

  /**
   * Wait for the login form to be displayed
   */
  public async waitForLoginForm() {
    const until = protractor.ExpectedConditions;
    await browser.wait(
      until.visibilityOf(this.loginForm),
      appconfig.Timeout.ElementVisibility
    );
    await logger.info("Login Form Displayed");
  }

  /**
   * Fill and submit the login form
   */
  public async fillLoginForm(username, password) {
    const until = protractor.ExpectedConditions;
    await browser.wait(
      until.presenceOf(this.userNameField),
      appconfig.Timeout.ElementVisibility
    );
    await this.userNameField.sendKeys(username);
    await this.passwordField.sendKeys(password);
    logger.info(
      "Login form filled with values: username - " +
        username +
        ", password - " +
        password
    );
    browser.ignoreSynchronization = true;
    await browser.wait(until.elementToBeClickable(this.loginButton));
    await this.loginButton.click();
    logger.info("Submitted login form");
  }

  /**
   * Wait for home page to be displayed
   */
  public async waitForHomePage() {
    const until = protractor.ExpectedConditions;
    const homepage = new HomePage();
    await browser.wait(
      until.visibilityOf(homepage.container),
      appconfig.Timeout.PageLoad,
      "Element did not display within timoeout"
    );
    return homepage;
  }

  /**
   * Wait for error message to be displayed
   */
  public async waitForErrorMessage() {
    const until = protractor.ExpectedConditions;
    await browser.wait(
      until.visibilityOf(this.errorMessage),
      appconfig.Timeout.ElementVisibility,
      "Element did not display within 90 seconds"
    );
  }
}
