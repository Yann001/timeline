class TagFactory {
  /**
   * @constructor
   */
  constructor() {
    this.ratio = 1.618; // width / height
    this.fontSize = 16; // default font size (unit: px)
    this.imgWidth = 120; // default img width (unit: px)
    this.imgHeight = 90; // default img height (unit: px)
    this.maxWidth = 450; // default max width (unit: px)
  }
  /**
   * create tag
   * @param {String} tagName the tag name
   * @param {Object} [attrObj] the tag's attribute object
   * @param {Object} [cssObj] the tag's css object
   * @return {HTMLElement}
   */
  createTag(tagName, attrObj = {}, cssObj = {}) {
    const tags = ['a', 'span', 'img', 'label', 'div', 'p', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    if(!tags.includes(tagName.toLowerCase())) {
      throw new Error('the tagName is not supported');
    }
    let node = document.createElement(tagName);
    for (var attr in attrObj) {
      node.setAttribute(attr, attrObj[attr]);
    }
    for (var css in cssObj) {
      node.style[css] = cssObj[css];
    }
    return node;
  }
  /**
   * create tag and return tag, tag's width and height
   * @param {*} tagName the tag name
   * @param {*} text the tag text
   * @param {Object} [attrObj] the tag's attribute object
   * @param {Object} [cssObj] the tag's css object
   * @return {Object} node, width and height
   */
  getTagDetail(tagName, text, attrObj = {}, cssObj = {}) {
    let node = this.createTag(tagName, attrObj, cssObj);
    let fontSize = parseInt(cssObj.fontSize) || this.fontSize;
    let width = 0, height = 0;
    if (tagName.toLowerCase() != 'img') {
      let len = text.length;
      if (len <= 10) { // one line
        width = (fontSize * len) * 1.1;
        height = fontSize * 1.5;
      } else { // multi lines
        let area = len * (fontSize * 1.1) * (fontSize * 1.5);
        height = Math.sqrt(area / this.ratio);
        width = height * this.ratio;
        if (width > this.maxWidth) {
          width = this.maxWidth;
          height = (area / 1.4) / width; // the 1.4 need be adjusted
        }
      }
      node.textContent = text;
    } else {
      width = parseInt(cssObj.width) || this.imgWidth;
      height = parseInt(cssObj.height) || this.imgHeight;
    }
    node.style.display = 'inline-block';
    node.style.width = width + 'px';
    node.style.height = height + 'px';
    return {
      node,
      width,
      height
    }
  }
}

export default TagFactory
