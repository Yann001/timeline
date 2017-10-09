import Canvas from '@/src/interface/Canvas';

class TagBorder extends Canvas {
  constructor ({canvas, width, height}) {
    super(...arguments);
  }
  /**
   * draw tag border
   * @param {Number} x
   * @param {Number} y
   * @param {Number} offset
   * @param {Boolean} isLeft
   * @param {Object} option {triBase, triHeight, rectWidth, rectHeight}
   * @param {Object} style
   */
  draw({x, y, offset, isLeft, option, style}) {
    let ctx = this.ctx;
    offset = offset || option.rectHeight / 2;
    ctx.moveTo(x, y);
    if (isLeft) {
      ctx.lineTo(x + option.triHeight, y - (offset - option.triBase / 2));
      ctx.lineTo(x + option.triHeight, y - offset);
      ctx.lineTo(x + option.triHeight + option.rectWidth, y - offset);
      ctx.lineTo(x + option.triHeight + option.rectWidth, y + (option.rectHeight - offset));
      ctx.lineTo(x + option.triHeight, y + (option.rectHeight - offset));
      ctx.lineTo(x + option.triHeight, y + (option.triBase / 2));
      ctx.lineTo(x, y);
    } else {
      ctx.lineTo(x - option.triHeight, y - (offset - option.triBase / 2));
      ctx.lineTo(x - option.triHeight, y - offset);
      ctx.lineTo(x - option.triHeight - option.rectWidth, y - offset);
      ctx.lineTo(x - option.triHeight - option.rectWidth, y + (option.rectHeight - offset));
      ctx.lineTo(x - option.triHeight, y + (option.rectHeight - offset));
      ctx.lineTo(x - option.triHeight, y + (option.triBase / 2));
      ctx.lineTo(x, y);
    }
    if (style) {
      ctx.lineWidth = style.lineWidth || 1;
      ctx.fillStyle = style.color || '#000000';
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }
}

export default TagBorder
