import { logger } from "../../../../../logger/logger";
import { CommonHelper } from "../../../../utils/common-helper";
import { ConfigHelper } from "../../../../utils/config-helper";
import { HomePageHelper } from "../home-page/home.helper";
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
    await CommonHelper.verifyCurrentUrl(ConfigHelper.getLoginURL());
    await this.loginPageObject.waitForLoginForm();
    await this.loginPageObject.fillLoginForm(username, password);
    const homepage = await this.loginPageObject.waitForHomePage();
    HomePageHelper.setHomePage(homepage);
    await HomePageHelper.verifyHomePage();
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
    const homepage = await this.loginPageObject.waitForHomePage();
    HomePageHelper.setHomePage(homepage);
    await HomePageHelper.verifyHomePage();
  }

  private static loginPageObject;
}
