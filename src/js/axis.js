class Axis {
  /**
   * @constructor
   * @param {String} id this axis id
   * @param {Number} width this axis width
   * @param {Number} height this axis height
   */
  constructor(id, width, height) {
    this.el = document.querySelector(`#${id}`);
    this.el.style.width = width + 'px';
    this.el.style.height = height + 'px';
  }
  /**
   * add canvas node
   * @param {Object} [attrObj] 
   * @param {Object} [cssObj] 
   */
  addCanvas(attrObj = {}, cssObj = {}) {
    let child = document.createElement('canvas');
    for (var attr in attrObj) {
      child.setAttribute(attr, attrObj[attr]);
    }
    for (var css in cssObj) {
      child.style[css] = cssObj[css];
    }
    this.el.appendChild(child);
    child = null;
  }
  /**
   * add div node according to thing
   * @param {Object} thing the thing object
   * @param {Object} [attrObj] the element's attribute object
   * @param {Object} [cssObj] the element's css object
   */
  addDescDiv(thing, attrObj = {}, cssObj = {}) {
    let child = document.createElement('div');
    let
      childChild = null,
      img = null;
    for (var key in thing) {
      if (key != 'id' && thing[key] != '') {
        if (key != 'img') {
          childChild = document.createElement('div');
          childChild.textContent = thing[key];
          child.appendChild(childChild);
          childChild = null;
        } else {
          childChild = document.createElement('div');
          img = document.createElement('img');
          img.setAttribute('src', thing[key]);
          childChild.appendChild(img);
          child.appendChild(childChild);
          img = null;
          childChild = null;
        }
      }
    }
    for (var attr in attrObj) {
      child.setAttribute(attr, attrObj[attr]);
    }
    for (var css in cssObj) {
      child.style[css] = cssObj[css];
    }
    this.el.appendChild(child);
    child = null;
  }
}

export default Axis
