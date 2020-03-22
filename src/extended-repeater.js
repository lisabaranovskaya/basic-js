module.exports = function repeater(str, options) {
    const DEFAULT = {
        repeatTimes: 1,
        separator: '+',
        addition: '',
        additionRepeatTimes: 1,
        additionSeparator: '|'
    };

    if (typeof str !== "string") {
       str = String(str);
    }

    let result = '';

    if (options.hasOwnProperty('addition')) {
        if (typeof addition !== 'string') {
            options.addition = String(options.addition);
        }

        if (!options.additionRepeatTimes) {
            options.additionRepeatTimes = DEFAULT.additionRepeatTimes;
        } 

        if (!options.additionSeparator) {
            options.additionSeparator = DEFAULT.additionSeparator;
        }
    } else {
        options.addition = DEFAULT.addition;
    }

    if (!options.separator) {
        options.separator = DEFAULT.separator;
    }

    if (!options.repeatTimes) {
        options.repeatTimes = DEFAULT.repeatTimes;
    }

    for (let i = 0; i < options.repeatTimes; i++) {
        result += str;
        if (options.addition !== DEFAULT.addition) {
            for (let k = 0; k < options.additionRepeatTimes; k++) {
                result += options.addition;
                if (k !== options.additionRepeatTimes - 1) {
                    result += options.additionSeparator;
                }
            }
        }

        if (i !== options.repeatTimes - 1) {
            result += options.separator;
        }
    }

    return result;
};
