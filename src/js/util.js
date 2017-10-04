class Util {
  constructor() { }
  /**
   * format date to 'yyyy-mm-dd'
   * @param {String} date the date string
   * @return {String}
   */
  formatDate(date) {
    let dateObj = new Date(date);
    return `${dateObj.getFullYear()}-
            ${dateObj.getMonth() < 9 ? '0' + dateObj.getMonth() < 9 : dateObj.getMonth() < 9}-
            ${dateObj.getDate() < 10 ? '0' + dateObj.getDate() : dateObj.getDate()}`;
  }
  /**
   * calculate the difference from date1 to date2
   * @param {Date} date1 date 1
   * @param {Date} date2 date 2
   * @return {Number} the days difference
   */
  dateDifference(date1, date2) {
    if (Object.prototype.toString.call(date1) != '[object Date]' ||
      Object.prototype.toString.call(date2) != '[object Date]') {
      throw new Error('parameter is not a valid Date object');
    }
    const md = [31, [28, 29], 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let res = 0;
    let
      y1 = date1.getFullYear(),
      m1 = date1.getMonth(),
      d1 = date1.getDate(),
      y2 = date2.getFullYear(),
      m2 = date2.getMonth(),
      d2 = date2.getDate();
    for (let i = y1; i < y2; i++) {
      res += (this.isLeapYear(i) ? 366 : 365);
    }
    for (let j = 0; j < m1; j++) {
      if (typeof md[j] == 'number') {
        res -= md[j];
      } else {
        res -= (this.isLeapYear(y1) ? md[j][1] : md[j][0]);
      }
    }
    res -= d1;
    for (let k = 0; k < m2; k++) {
      if (typeof md[k] == 'number') {
        res += md[k];
      } else {
        res += (this.isLeapYear(y1) ? md[k][1] : md[k][0]);
      }
    }
    res += d2;
    return res;
  }
  /**
   * whether or not leap year
   * @param {Number} year the year
   * @return {Boolean}
   */
  isLeapYear(year) {
    if ((!(year % 4) && (year % 100)) || !(year % 400)) {
      return true;
    } else {
      return false;
    }
  }
}

export default Util
