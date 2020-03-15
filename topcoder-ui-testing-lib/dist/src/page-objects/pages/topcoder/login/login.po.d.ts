import { HomePage } from "../home-page/home.po.js";
export declare class LoginPage {
    loginUrl: any;
    homePageUrl: any;
    logoutUrl: any;
    /**
     * Set Urls
     */
    setUrls(urlObject: any): Promise<void>;
    /**
     * Get login page
     */
    get(): Promise<void>;
    /**
     * Get login form
     */
    readonly loginForm: import("protractor").ElementFinder;
    /**
     * Get Username field
     */
    readonly userNameField: import("protractor").ElementFinder;
    /**
     * Get Password field
     */
    readonly passwordField: import("protractor").ElementFinder;
    /**
     * Get Login button
     */
    readonly loginButton: import("protractor").ElementFinder;
    /**
     * Get Error message
     */
    readonly errorMessage: import("protractor").ElementFinder;
    /**
     * Logout the user
     */
    logout(): Promise<void>;
    /**
     * Wait for the login form to be displayed
     */
    waitForLoginForm(): Promise<void>;
    /**
     * Fill and submit the login form
     */
    fillLoginForm(username: any, password: any): Promise<void>;
    /**
     * Wait for home page to be displayed
     */
    waitForHomePage(): Promise<HomePage>;
    /**
     * Wait for error message to be displayed
     */
    waitForErrorMessage(): Promise<void>;
}
