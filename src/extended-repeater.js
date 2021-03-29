const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

    let result = '';
    let addition = options.addition;
    let additionStr = addition !== undefined ? options.addition : "";
    let additionSeparator = options.additionSeparator || "|";
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let separator = options.separator || "+";
    let repeatTimes = options.repeatTimes || 1;
    result += ((str + ((additionStr + additionSeparator)
                    .repeat(additionRepeatTimes))
                .slice(0, -additionSeparator.length) + separator)
            .repeat(repeatTimes))
        .slice(0, -(separator.length))
    return result;
};