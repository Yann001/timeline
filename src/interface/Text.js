class Text {
  constructor (text) {
    if (typeof text != 'string') {
      throw new TypeError('the text property is necessary and it\'s type must be String');
    }
    this.text = text;
    this.textNode = document.createTextNode(text);
  }
  create() {
    throw new TypeError('"create" called on an object that does not implement interface Text.');
  }
}

export default Text
