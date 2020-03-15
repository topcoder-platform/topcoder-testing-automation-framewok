import { browser, protractor } from "protractor";
import { logger } from "../../../../../logger/logger";
import { CommonHelper } from "../../../../utils/common-helper";
import { HomePage } from "../home-page/home.po";
import { LoginPageConstants } from "./login.constants";
import { LoginPage } from "./login.po";

export class LoginPageHelper {
  /**
   * Set the page object
   * @param {LoginPage} loginpage
   */
  public static setLoginPage(loginpage) {
    this.loginPageObject = loginpage;
  }

  /**
   * Login
   * @param {String} username
   * @param {String} password
   */
  public static async login(username: string, password: string) {
    await CommonHelper.verifyCurrentUrl(this.loginPageObject.loginUrl);
    await this.loginPageObject.waitForLoginForm();
    await this.loginPageObject.fillLoginForm(username, password);
    const homePage = await this.loginPageObject.waitForHomePage();
    await this.verifyHomePage(homePage);
  }

  /**
   * Login with invalid username
   * @param {String} invalidUsername
   * @param {String} password
   */
  public static async loginWithInvalidUserName(
    invalidUsername: string,
    password: string
  ) {
    await this.loginPageObject.waitForLoginForm();
    await this.loginPageObject.fillLoginForm(invalidUsername, password);
    await this.loginPageObject.waitForErrorMessage();
    expect(await this.loginPageObject.errorMessage.getText()).toEqual(
      LoginPageConstants.errors.MemberNotPresent
    );
    logger.info("Member not found error displayed");
  }

  /**
   * Login with invalid password
   * @param {String} username
   * @param {String} invalidPassword
   */
  public static async loginWithInvalidPassword(
    username: string,
    invalidPassword: string
  ) {
    await this.loginPageObject.waitForLoginForm();
    await this.loginPageObject.fillLoginForm(username, invalidPassword);
    await this.loginPageObject.waitForErrorMessage();
    expect(await this.loginPageObject.errorMessage.getText()).toEqual(
      LoginPageConstants.errors.InvalidPassword
    );
    logger.info("Invalid Password error message displayed");
  }

  /**
   * Logout
   */
  public static async logout() {
    this.loginPageObject.logout();
    const homePage = await this.loginPageObject.waitForHomePage();
    await this.verifyHomePage(homePage);
  }

  /**
   * Verify the current page is the home page
   * @param {HomePage} homePage
   */
  public static async verifyHomePage(homePage: HomePage) {
    const until = protractor.ExpectedConditions;
    await browser.wait(until.visibilityOf(homePage.container));
    CommonHelper.verifyCurrentUrl(this.loginPageObject.homePageUrl);
    logger.info("User redirected to home-page");
  }

  private static loginPageObject;
}
