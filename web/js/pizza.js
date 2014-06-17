var _ = require('lodash'); //jshint ignore:line

module.exports = function () {
    'use strict';

    function buyPizza(dollarAmount) {
        if (_.isNumber(dollarAmount)) {
            if (dollarAmount > 15) {
                return '$' + dollarAmount + '? You are very generous; very generous indeed.  I accept!';
            }
            if (dollarAmount >= 7) {
                return '$' + dollarAmount + ' seems like a fair price for a pizza. Sold!';
            } else if (dollarAmount > 0) {
                return '$' + dollarAmount + ' seems a little low for a pizza. Come back when you have more money.';
            } else if (dollarAmount > 0) {
                return '$' + dollarAmount + ' seems a little low for a pizza. Come back when you have more money.';
            } else {
                return 'I am NOT going to pay you $' + Math.abs(dollarAmount) + ' to take a pizza...';
            }
        } else {
            return '"' + dollarAmount + '" is not evan real money!!!';
        }
    }

    return {
        buyPizza: buyPizza
    };
};
