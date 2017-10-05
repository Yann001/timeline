import Calculator from '~/src/js/calculator';
import Axis from '~/src/js/axis';
import Canvas from '~/src/js/canvas'

class Timeline {
  constructor(things) {
    let cal = new Calculator(things);
    let axisWH = cal.getAxisWH();
    let axis = new Axis('axis', axisWH.width, axisWH.height + 200);
    // handle left and right
    let temp = 0;
    things.forEach((thing) => {
      let calVal = cal.getPosAndWH(new Date(thing.date));
      axis.addCanvas({
        id: thing.id
      }, {
          bottom: calVal.canBottom + 'px',
          left: ((temp % 2) ? calVal.canLeft[0] : calVal.canLeft[1]) + 'px'
        });
      axis.addDescDiv(thing, {
        id: thing.id + '-desc',
        class: (temp % 2) ? 'left' : 'right'
      }, {
          width: calVal.divWidth + 'px',
          height: calVal.divHeight + 'px',
          bottom: calVal.divBottom + 'px',
          left: ((temp % 2) ? calVal.divLeft[0] : calVal.divLeft[1]) + 'px'
        });
    
      let can = new Canvas(thing.id, calVal.canWidth, calVal.canHeight);
      can.drawAllow(2, 16, !(temp % 2));
      can = null;
      temp++;
    });
  }
}

export default Timeline
