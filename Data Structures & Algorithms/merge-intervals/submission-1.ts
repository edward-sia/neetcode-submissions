class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {

        intervals.sort((a, b) => {
            if (a[0] == b[0]) return a[1] - b[1]
            return a[0] - b[0]
        })

        let res: number[][] = []
        let l = 0, r = 1

        res.push([...intervals[l]])
        while (r < intervals.length) {
            if (intervals[r][0] > res[res.length-1][1]) {
                res.push(intervals[r])
            } else {
                res[res.length-1][1] = Math.max(intervals[r][1], res[res.length-1][1])
            }
            r++
        }

        return res
    }
}
