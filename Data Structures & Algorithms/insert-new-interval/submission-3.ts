class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {

        // let res = []

        // // o(nlogn)
        // intervals.push(newInterval)
        // intervals.sort((a, b) => a[0] - b[0])

        // res.push(intervals[0])
        // for (let i = 1 ; i < intervals.length ; i++) {
        //     let last = res[res.length - 1]
        //     let curr = intervals[i]
        //     if (curr[0] <= last[1]) {
        //         last[1] = Math.max(last[1], curr[1])
        //     } else {
        //         res.push(curr)
        //     }
        // }

        // return res


        let res = []
        let i = 0

        // add intervals that ends before newInterval starts
        while (i < intervals.length && intervals[i][1] < newInterval[0]) {
            res.push(intervals[i++])
        }

        // merge overlapping interval
        while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(intervals[i][0], newInterval[0])
            newInterval[1] = Math.max(intervals[i][1], newInterval[1])
            i++
        }
        res.push(newInterval)

        // add the rest
        while (i < intervals.length) {
            res.push(intervals[i++])
        }

        return res
    }
}
