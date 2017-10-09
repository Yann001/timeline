class Tag {
  constructor(type, content) {
    this.type = type;
    this.content = content;
  }
  create() {
    throw new TypeError('"create" called on an object that does not implement interface Tag.');
  }
}

export default Tag
