class Canvas {
  /**
   * 
   * @param {HTMLCanvasEement} canvas
   */
  constructor({canvas, width, height}) {
    this.canvas = canvas;
    this.canWidth = width;
    this.canHeight = height;
    canvas.width = width;
    canvas.height = height;
    this.ctx = this.canvas.getContext('2d');
  }
  draw() {
    throw new TypeError('"draw" called on an object that does not implement interface Text.');
  }
}