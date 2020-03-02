export declare class HomePageHelper {
    /**
     * Set the Homepage Object
     */
    static setHomePage(homepage: any): void;
    /**
     * Verify the current page is the home page
     */
    static verifyHomePage(): Promise<void>;
    private static homePageObject;
}
