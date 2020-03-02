"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
exports.ElementHelper = {
    /**
     * Get element by classname
     * @param {String} className
     */
    getElementByClassName: function (className) {
        return protractor_1.element(protractor_1.by.className(className));
    },
    /**
     * Get all elements by classname
     * @param {String} className
     */
    getAllElementsByClassName: function (className) {
        return protractor_1.element.all(protractor_1.by.className(className));
    },
    /**
     * Get element by css
     * @param {String} css
     */
    getElementByCss: function (css) {
        return protractor_1.element(protractor_1.by.css(css));
    },
    /**
     * Get element by id
     * @param {String} id
     */
    getElementById: function (id) {
        return protractor_1.element(protractor_1.by.id(id));
    },
    /**
     * Get element by javascript
     * @param {String|Function} js
     */
    getElementByJs: function (js) {
        return protractor_1.element(protractor_1.by.js(js));
    },
    /**
     * Get element by name
     * @param {String} name
     */
    getElementByName: function (name) {
        return protractor_1.element(protractor_1.by.name(name));
    },
    /**
     * Get element by partial anchor element text
     * @param {String} text
     */
    getElementByPartialLinkText: function (text) {
        return protractor_1.element(protractor_1.by.partialLinkText(text));
    },
    /**
     * Get element by html tag
     * @param {String} tag
     */
    getElementsByTag: function (tag) {
        return protractor_1.element(protractor_1.by.tagName(tag));
    },
    /**
     * Get element by binding
     * @param {String} binding
     */
    getElementByBinding: function (binding) {
        return protractor_1.element(protractor_1.by.binding(binding));
    },
    /**
     * Get element by exact binding
     * @param {String} binding
     */
    getElementByExactBinding: function (binding) {
        return protractor_1.element(protractor_1.by.exactBinding(binding));
    },
    /**
     * Get element by model
     * @param {String} model
     */
    getElementByModel: function (model) {
        return protractor_1.element(protractor_1.by.model(model));
    },
    /**
     * Get element by button containing substring
     * @param {String} text
     */
    getElementByPartialButtonText: function (text) {
        return protractor_1.element(protractor_1.by.partialButtonText(text));
    },
    /**
     * Get element by repeater
     * @param {String} repeater
     */
    getElementByRepeater: function (repeater) {
        return protractor_1.element(protractor_1.by.repeater(repeater));
    },
    /**
     * Get element by exact repeater
     * @param {String} repeater
     */
    getElementByExactRepeater: function (repeater) {
        return protractor_1.element(protractor_1.by.exactRepeater(repeater));
    },
    /**
     * Get element by css containing text
     * @param {String} cssSelector
     * @param {String} text
     */
    getElementByCssContainingText: function (cssSelector, text) {
        return protractor_1.element(protractor_1.by.cssContainingText(cssSelector, text));
    },
    /**
     * Get element by options
     * @param {String} options
     */
    getElementByOptions: function (options) {
        return protractor_1.element(protractor_1.by.options(options));
    },
    /**
     * Get element by deep css
     * @param {String} deepCss
     */
    getElementByDeepCss: function (deepCss) {
        return protractor_1.element(protractor_1.by.deepCss(deepCss));
    },
    /**
     * Get element by xPath
     * @param {String} xPath
     */
    getElementByXPath: function (xPath) {
        return protractor_1.element(protractor_1.by.xpath(xPath));
    },
    /**
     * Get element containing text
     * @param {String} text
     */
    getElementContainingText: function (text) {
        var xPath = "//*[contains(text(),\"" + text + "\")]";
        return this.getElementByXPath(xPath);
    },
    /**
     * Get html tag element containing text
     * @param {String} tag
     * @param {String} text
     */
    getTagElementContainingText: function (tag, text) {
        var xPath = "//" + tag + "[contains(text(),\"" + text + "\")]";
        return this.getElementByXPath(xPath);
    },
    /**
     * Get input element by type
     * @param {String} type
     */
    getInputElementByType: function (type) {
        var xPath = "//input[@type=\"" + type + "\"]";
        return this.getElementByXPath(xPath);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZWxlbWVudC1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBeUM7QUFFNUIsUUFBQSxhQUFhLEdBQUc7SUFDM0I7OztPQUdHO0lBQ0gscUJBQXFCLFlBQUMsU0FBUztRQUM3QixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7O09BR0c7SUFDSCx5QkFBeUIsWUFBQyxTQUFTO1FBQ2pDLE9BQU8sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlLFlBQUMsR0FBRztRQUNqQixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxjQUFjLFlBQUMsRUFBRTtRQUNmLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGNBQWMsWUFBQyxFQUFFO1FBQ2YsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCLFlBQUMsSUFBSTtRQUNuQixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7O09BR0c7SUFDSCwyQkFBMkIsWUFBQyxJQUFJO1FBQzlCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFD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