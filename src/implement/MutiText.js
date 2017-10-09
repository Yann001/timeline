import Text from '@/src/interface/Text';

class MutiText extends Text {
  constructor ({text, attr, css}) {
    super(text);
    this.attr = attr || {};
    this.css = css || {};
    this.fontSize = parseInt(css.fontSize) || 16;
    this.ratio = 1.618;
    this.maxWidth = 450;
    Object.defineProperty(this, 'wh', {
      get: () => {
        let
          area = text.length * (this.fontSize * 1.1) * (this.fontSize * 1.5),
          height = Math.sqrt(area / this.ratio),
          width = height * this.ratio;
        if (width > this.maxWidth) {
          width = this.maxWidth;
          height = (area / 1.4) / width; // the 1.4 need be adjusted
        }
        return {
          width,
          height
        }
      },
      set: () => {
        throw new Error('width is read-only.');
      }
    });
  }
  create() {
    let node = document.createElement('div');
    for (let a in this.attr) {
      node.setAttribute(a, this.attr[a]);
    }
    for (let c in this.css) {
      node.style[c] = this.css[c];
    }
    node.appendChild(this.textNode);
    return node;
  }
}
