# Percentile
A simple percentile function for JavaScript (or TypeScript) with linear interpolation, taking O(1) time. This is basically an implemetation of the [C = 1 algorithm here](https://en.wikipedia.org/wiki/Percentile)—the same one used by Excel via the PERCENTILE or PERCENTILE.INC formula functions.

## Example
```javascript
import { percentile } from "percentile-js";

percentile(0.5, [0, 300, 600]);
// 300

percentile(0.75, [0, 300, 600]);
// 450 -- interpolated

percentile(1, [0, 300, 600]);
// 600
```