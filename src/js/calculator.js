import Util from './util'
class Calculator {
  /**
   * @constructor
   * @param {Array} things the thing Array
   */
  constructor(things) {
    this.things = things;
    this.axisWidth = 8;
    this.canWidth = 30;
    this.divWidth = 150; // TODO: calculate according to thing desc
    this.height = 50; // TODO: calculate according to thing desc
    this.dates = [];
    this.scale = 1; // px : day
    this.minHeight = 50;
    this.sortT();
  }
  /**
   * sort the things according to date by ascending
   */
  sortT() {
    this.things.sort((t1, t2) => {
      let ts1 = t1.date.split('-');
      let a = {
        y: parseInt(ts1[0]),
        m: parseInt(ts1[1]),
        d: parseInt(ts1[2])
      };
      let ts2 = t2.date.split('-');
      let b = {
        y: parseInt(ts2[0]),
        m: parseInt(ts2[1]),
        d: parseInt(ts2[2])
      };
      if (a.y > b.y) {
        return 1;
      } else if (a.y < b.y) {
        return -1;
      } else {
        if (a.m > b.m) {
          return 1;
        } else if (a.m < b.m) {
          return -1;
        } else {
          return a.d - b.d;
        }
      }
    });
    // return this.things;
  }
  /**
   * set the scale (px : day)
   * @param {Number} scale scale
   */
  setScale(scale) {
    this.scale = scale;
  }
  /**
   * get axis width and height
   * @return {Object} width and height
   */
  getAxisWH() {
    let util = new Util();
    let days = util.dateDifference(new Date(this.things[0].date), new Date(this.things[this.things.length - 1].date));
    let h1 = days * this.scale;
    let h2 = this.things.length * this.minHeight;
    return {
      width: this.axisWidth,
      height: h1 > h2 ? h1 : h2
    };
  }
  /**
   * get absolute position left and bottom
   * @param {Date} date the date object
   * @return {Object}
   */
  getPosAndWH(date) {
    let util = new Util();
    let days = util.dateDifference(new Date(this.things[0].date), date);
    return {
      canWidth: this.canWidth,
      canHeight: this.height,
      canBottom: days * this.scale,
      canLeft: [-this.canWidth, this.axisWidth],
      divWidth: this.divWidth,
      divHeight: this.height,
      divBottom: days * this.scale,
      divLeft: [-(this.canWidth + this.divWidth), this.axisWidth + this.canWidth]
    };
  }
}

export default Calculator
