class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1;
        let res = 0;

        while (l < r) {
            const curr = (r - l) * Math.min(heights[l], heights[r])
            res = Math.max(res, curr)

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return res;
    }
}
