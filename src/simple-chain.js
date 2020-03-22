const chainMaker = {
  chain : [],
  result: [],
  getLength() {
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    value === undefined ? this.chain.push('( )') : this.chain.push(`( ${value} )`);
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (this.chain[position-1] === undefined || !(Number.isInteger(position)) || parseInt(position) !== position) {
      this.chain = [];
      throw Error;
    } else {
      this.chain.splice(position-1, 1);
    }
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    this.result = this.chain.join('~~');
    this.chain = [];
    return this.result;
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
