module.exports = class DepthCalculator {
    calculateDepth(arr) {
        // remove line with error and write your code here
        return Array.isArray(arr) ?
            1 + Math.max(0, ...arr.map(this.calculateDepth.bind(this))) :
            0;
    }
};
