export declare class LoginPageHelper {
    /**
     * Set the page object
     * @param {LoginPage} loginpage
     */
    static setLoginPage(loginpage: any): void;
    /**
     * Login
     * @param {String} username
     * @param {String} password
     */
    static login(username: string, password: string): Promise<void>;
    /**
     * Login with invalid username
     * @param {String} invalidUsername
     * @param {String} password
     */
    static loginWithInvalidUserName(invalidUsername: string, password: string): Promise<void>;
    /**
     * Login with invalid password
     * @param {String} username
     * @param {String} invalidPassword
     */
    static loginWithInvalidPassword(username: string, invalidPassword: string): Promise<void>;
    /**
     * Logout
     */
    static logout(): Promise<void>;
    private static loginPageObject;
}
