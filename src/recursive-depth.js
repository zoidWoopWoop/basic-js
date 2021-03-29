const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let result = 0;
        for (const iterator of arr) {
            if (Array.isArray(iterator)) {
                let depth = this.calculateDepth(iterator);
                if (depth > result) {
                    result = depth;
                }
            }
        }
        return result + 1;
    }
};