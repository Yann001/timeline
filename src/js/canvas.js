class Canvas {
  /**
   * @constructor
   * @param {String} id canvas id
   * @param {Number} width canvas width
   * @param {Number} height canvas height
   */
  constructor(id, width, height) {
    this.can = document.querySelector(`#${id}`);
    this.can.width = width;
    this.can.height = height;
    this.width = width;
    this.height = height;
    this.ctx = this.can.getContext('2d');
  }
  /**
   * draw cycle
   * @param {Nmuber} x X-axis
   * @param {Nmuber} y Y-axis
   * @param {Nmuber} radius radius
   * @param {Boolean} isFill fill color or not
   * @param {String} color the color string by hex
   */
  drawCycle(x, y, radius, isFill = false, color = '#000000') {
    let ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.closePath();
    if (isFill) {
      ctx.fillStyle = color;
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }
  /**
   * draw allow
   * @param {Number} radius the cycle's radius
   * @param {Number} base the base length of triangle
   * @param {Boolean} isLeft the direction of allow is left or not
   * @param {Boolean} isFill fill color or not
   * @param {String} color the color string by hex
   */
  drawAllow(radius, base, isLeft = true, isFill = false, color = '#000000') {
    let ctx = this.ctx;
    if (isLeft) {
      let
        x = radius,
        y = this.height / 2;
      this.drawCycle(x, y, radius, isFill, color);
      ctx.moveTo(x + radius, y);
      ctx.lineTo(this.width - 1, y - (base / 2));
      ctx.lineTo(this.width - 1, 0);
      ctx.moveTo(x + radius, y);
      ctx.lineTo(this.width - 1, y + (base / 2));
      ctx.lineTo(this.width - 1, this.height);
    } else {
      let
        x = this.width - radius,
        y = this.height / 2;
      this.drawCycle(x, y, radius, isFill, color);
      ctx.moveTo(x - radius, y);
      ctx.lineTo(1, y - (base / 2));
      ctx.lineTo(1, 0);
      ctx.moveTo(x - radius, y);
      ctx.lineTo(1, y + (base / 2));
      ctx.lineTo(1, this.height);
    }
    if (isFill) {
      ctx.fillStyle = color;
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }
}

export default Canvas
