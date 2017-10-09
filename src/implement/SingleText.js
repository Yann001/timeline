import Text from '@/src/interface/Text';

class SingleText extends Text {
  constructor ({text, attr, css}) {
    super(text);
    this.attr = attr || {};
    this.css = css || {};
    this.fontSize = parseInt(css.fontSize) || 16;
    Object.defineProperties(this, {
      width: {
        get: () => {
          return this.fontSize * text.length * 1.1; // according to character spacing
        },
        set: () => {
          throw new Error('width is read-only.');
        }
      },
      height: {
        get: () => {
          return this.fontSize * 1.5; // according to line-height
        },
        set: () => {
          throw new Error('height is read-only.');
        }
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
