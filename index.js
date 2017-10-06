'use strict'

/**
 * Reverse string
 */
function reverse(value) {

    var returnValue = "";
    if (value) {
        for (var i = (value.length - 1); i >= 0; i--) {
            returnValue += value[i];
        }
    }

    return returnValue;
}

module.exports = {
    reverse
};
