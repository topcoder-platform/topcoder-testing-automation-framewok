import { by, element } from "protractor";

export const ElementHelper = {
  /**
   * Get element by classname
   * @param {String} className
   */
  getElementByClassName(className) {
    return element(by.className(className));
  },

  /**
   * Get all elements by classname
   * @param {String} className
   */
  getAllElementsByClassName(className) {
    return element.all(by.className(className));
  },

  /**
   * Get element by css
   * @param {String} css
   */
  getElementByCss(css) {
    return element(by.css(css));
  },

  /**
   * Get element by id
   * @param {String} id
   */
  getElementById(id) {
    return element(by.id(id));
  },

  /**
   * Get element by javascript
   * @param {String|Function} js
   */
  getElementByJs(js) {
    return element(by.js(js));
  },

  /**
   * Get element by name
   * @param {String} name
   */
  getElementByName(name) {
    return element(by.name(name));
  },

  /**
   * Get element by partial anchor element text
   * @param {String} text
   */
  getElementByPartialLinkText(text) {
    return element(by.partialLinkText(text));
  },

  /**
   * Get element by html tag
   * @param {String} tag
   */
  getElementsByTag(tag) {
    return element(by.tagName(tag));
  },

  /**
   * Get element by binding
   * @param {String} binding
   */
  getElementByBinding(binding) {
    return element(by.binding(binding));
  },

  /**
   * Get element by exact binding
   * @param {String} binding
   */
  getElementByExactBinding(binding) {
    return element(by.exactBinding(binding));
  },

  /**
   * Get element by model
   * @param {String} model
   */
  getElementByModel(model) {
    return element(by.model(model));
  },

  /**
   * Get element by button containing substring
   * @param {String} text
   */
  getElementByPartialButtonText(text) {
    return element(by.partialButtonText(text));
  },

  /**
   * Get element by repeater
   * @param {String} repeater
   */
  getElementByRepeater(repeater) {
    return element(by.repeater(repeater));
  },

  /**
   * Get element by exact repeater
   * @param {String} repeater
   */
  getElementByExactRepeater(repeater) {
    return element(by.exactRepeater(repeater));
  },

  /**
   * Get element by css containing text
   * @param {String} cssSelector
   * @param {String} text
   */
  getElementByCssContainingText(cssSelector, text) {
    return element(by.cssContainingText(cssSelector, text));
  },
  /**
   * Get element by options
   * @param {String} options
   */
  getElementByOptions(options) {
    return element(by.options(options));
  },

  /**
   * Get element by deep css
   * @param {String} deepCss
   */
  getElementByDeepCss(deepCss) {
    return element(by.deepCss(deepCss));
  },

  /**
   * Get element by xPath
   * @param {String} xPath
   */
  getElementByXPath(xPath) {
    return element(by.xpath(xPath));
  },

  /**
   * Get element containing text
   * @param {String} text
   */
  getElementContainingText(text) {
    const xPath = `//*[contains(text(),"${text}")]`;
    return this.getElementByXPath(xPath);
  },

  /**
   * Get html tag element containing text
   * @param {String} tag
   * @param {String} text
   */
  getTagElementContainingText(tag, text) {
    const xPath = `//${tag}[contains(text(),"${text}")]`;
    return this.getElementByXPath(xPath);
  },

  /**
   * Get input element by type
   * @param {String} type
   */
  getInputElementByType(type) {
    const xPath = `//input[@type="${type}"]`;
    return this.getElementByXPath(xPath);
  }
};
