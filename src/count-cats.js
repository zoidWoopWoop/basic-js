const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let result = 0;
    let arr = matrix.flat(Infinity)
    for (const iterator of arr) {
        if (iterator == '^^')
            result++
    }
    return result
}