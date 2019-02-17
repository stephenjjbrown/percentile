/**
 * 
 * @param p Percentile as a number between 0 and 1 (inclusive)
 * @param values 
 */
export function percentile(p: number, values: number[]) {
    if (p < 0 || p > 1) {
        throw new Error("p must be between 0 and 1");
    }
    // TODO: Must be minimum of two data points?

    const i = p * (values.length - 1);
    const floored = Math.floor(i);

    if (floored === i) {
        return values[i];
    }

    const decimal = i - floored;
    const difference = values[floored + 1] - values[floored];
    return values[floored] + difference * decimal;
}