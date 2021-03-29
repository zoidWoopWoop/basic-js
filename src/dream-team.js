const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    let result = '';
    for (const member of members) {
        if (typeof member == 'string') {
            result += member.trim()[0];
        }
    }
    return result.toUpperCase().split('').sort().join('');
};