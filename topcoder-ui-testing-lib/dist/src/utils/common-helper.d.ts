export declare const CommonHelper: {
    /**
     * Click on an element containing text
     * @param {String} text
     */
    clickOnElementContainingText(text: any): Promise<void>;
    /**
     * Click on a html tag element containing text
     * @param {String} tag
     * @param {String} text
     */
    clickOnTagElementContainingText(tag: any, text: any): Promise<void>;
    /**
     * Verify page title
     * @param {String} title
     */
    verifyPageTitle(title: any): Promise<void>;
    /**
     * Verify page url
     * @param {String} url
     */
    verifyCurrentUrl(url: any): Promise<void>;
    /**
     * Verify pop window exists
     */
    verifyPopupWindow(): Promise<void>;
    /**
     * Verify pop up window's title
     * @param {String} title
     */
    verifyPopupWindowWithTitle(title: any): Promise<void>;
    /**
     * Verify pop up window's url
     * @param {String} expectedUrl
     */
    verifyPopupWindowWithUrl(expectedUrl: any): Promise<void>;
    /**
     * Get anchor element containing text and verify the href in that element
     * @param {String} text
     * @param {String} href
     */
    verifyHrefInAnchorContainingText(text: any, href: any): Promise<void>;
    /**
     * Switch tab by opening tab and optionally verify header of new tab
     * @param {String} tag
     * @param {String} text
     * @param {String|Null} newTabHeaderTag
     * @param {String|Null} newTabHeaderText
     */
    switchTabByClickingOnTagWithText(tag: any, text: any, newTabHeaderTag?: any, newTabHeaderText?: any): Promise<void>;
    /**
     * Await visibility of element
     * @param {Element} element
     */
    awaitVisibility(element: any): Promise<void>;
};
