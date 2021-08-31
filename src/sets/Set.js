export default class Set {
  constructor(arr) {
    this.originalArray = arr;
  }

  add(val) {
    if (!this.has(val)) this.originalArray.push(val);
  }

  has(val) {
    return this.originalArray.includes(val);
  }

  delete(val) {
    this.originalArray = this.originalArray.filter((v) => val !== v);
  }

  size() {
    return this.originalArray.length;
  }
}
