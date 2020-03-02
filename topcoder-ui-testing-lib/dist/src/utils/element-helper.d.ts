export declare const ElementHelper: {
    /**
     * Get element by classname
     * @param {String} className
     */
    getElementByClassName(className: any): import("protractor").ElementFinder;
    /**
     * Get all elements by classname
     * @param {String} className
     */
    getAllElementsByClassName(className: any): import("protractor").ElementArrayFinder;
    /**
     * Get element by css
     * @param {String} css
     */
    getElementByCss(css: any): import("protractor").ElementFinder;
    /**
     * Get element by id
     * @param {String} id
     */
    getElementById(id: any): import("protractor").ElementFinder;
    /**
     * Get element by javascript
     * @param {String|Function} js
     */
    getElementByJs(js: any): import("protractor").ElementFinder;
    /**
     * Get element by name
     * @param {String} name
     */
    getElementByName(name: any): import("protractor").ElementFinder;
    /**
     * Get element by partial anchor element text
     * @param {String} text
     */
    getElementByPartialLinkText(text: any): import("protractor").ElementFinder;
    /**
     * Get element by html tag
     * @param {String} tag
     */
    getElementsByTag(tag: any): import("protractor").ElementFinder;
    /**
     * Get element by binding
     * @param {String} binding
     */
    getElementByBinding(binding: any): import("protractor").ElementFinder;
    /**
     * Get element by exact binding
     * @param {String} binding
     */
    getElementByExactBinding(binding: any): import("protractor").ElementFinder;
    /**
     * Get element by model
     * @param {String} model
     */
    getElementByModel(model: any): import("protractor").ElementFinder;
    /**
     * Get element by button containing substring
     * @param {String} text
     */
    getElementByPartialButtonText(text: any): import("protractor").ElementFinder;
    /**
     * Get element by repeater
     * @param {String} repeater
     */
    getElementByRepeater(repeater: any): import("protractor").ElementFinder;
    /**
     * Get element by exact repeater
     * @param {String} repeater
     */
    getElementByExactRepeater(repeater: any): import("protractor").ElementFinder;
    /**
     * Get element by css containing text
     * @param {String} cssSelector
     * @param {String} text
     */
    getElementByCssContainingText(cssSelector: any, text: any): import("protractor").ElementFinder;
    /**
     * Get element by options
     * @param {String} options
     */
    getElementByOptions(options: any): import("protractor").ElementFinder;
    /**
     * Get element by deep css
     * @param {String} deepCss
     */
    getElementByDeepCss(deepCss: any): import("protractor").ElementFinder;
    /**
     * Get element by xPath
     * @param {String} xPath
     */
    getElementByXPath(xPath: any): import("protractor").ElementFinder;
    /**
     * Get element containing text
     * @param {String} text
     */
    getElementContainingText(text: any): any;
    /**
     * Get html tag element containing text
     * @param {String} tag
     * @param {String} text
     */
    getTagElementContainingText(tag: any, text: any): any;
    /**
     * Get input element by type
     * @param {String} type
     */
    getInputElementByType(type: any): any;
};
