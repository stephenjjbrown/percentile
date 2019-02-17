"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param p Percentile as a number between 0 and 1 (inclusive)
 * @param values
 */
function percentile(p, values) {
    if (p < 0 || p > 1) {
        throw new Error("p must be between 0 and 1");
    }
    // TODO: Must be minimum of two data points?
    var i = p * (values.length - 1);
    var floored = Math.floor(i);
    if (floored === i) {
        return values[i];
    }
    var decimal = i - floored;
    var difference = values[floored + 1] - values[floored];
    return values[floored] + difference * decimal;
}
exports.percentile = percentile;
