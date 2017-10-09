import SingleText from '@/src/implement/SingleText';
import MutiText from '@/src/implement/MutiText';
import TagBorder from '@/src/implement/TagBorder';
import Tag from '@/src/interface/Tag';

class TextTag extends Tag {
  constructor(text) {
    super('text', text);
  }
  create(type, canvas) {
    let tag = null;
    if (type.toLowerCase() === 'single') {
      tag = new SingleText({
        text: this.content
      });
    } else if (type.toLowerCase() === 'muti') {
      tag = new MutiText({
        text: this.content
      });
    } else {
      throw new TypeError('you type is not supported!');
    }
    let textTag = tag.create();
    let border = new TagBorder({
      canvas,
      width: tag.width,
      height: tag.height
    });
    border.draw({
      x: 0,
      y: tag.height / 2,
      option: {
        triBase: 10,
        triHeight: 8,
        rectWidth: tag.width,
        rectHeight: tag.height
      }
    });
    return {
      textTag,
      width: tag.width,
      height: tag.height
    }
  }
}

export default TextTag