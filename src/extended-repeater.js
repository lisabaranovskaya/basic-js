module.exports = function repeater(str, options) {
    if(options.hasOwnProperty('addition') && options.hasOwnProperty('additionSeparator')) {
        let add = options.addition + options.additionSeparator;
        let addRepeated = add.repeat(options.additionRepeatTimes-1) + options.addition;
        let strPlusAddition = str + addRepeated;
    return (strPlusAddition + options.separator).repeat(options.repeatTimes); }
};
  