class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        let total = 0

        intervals.sort((a, b) => {
            if (a[0] === b[0]) return a[1] - b[1]
            return a[0] - b[0]
        })

        let left = 0, right = 1

        while (right < intervals.length) {
            if (intervals[right][0] < intervals[left][1]) {
                intervals[left][1] = Math.min(intervals[left][1], intervals[right][1])
                right++
                total++
            } else {
                left = right
                right = left + 1
            }
        }

        return total;
    }
}
