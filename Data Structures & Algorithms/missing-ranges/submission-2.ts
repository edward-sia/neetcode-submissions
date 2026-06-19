class Solution {
    /**
     * @param {number[]} nums
     * @param {number} lower
     * @param {number} upper
     * @return {number[][]}
     */
    findMissingRanges(
        nums: number[],
        lower: number,
        upper: number,
    ): number[][] {

        if (nums.length == 0) {
            return [[lower, upper]]
        }
        let i = 0
        let res = []
        lower = lower - 1
        while (lower < nums[nums.length-1]) {
            if (nums[i] - lower > 1) {
                res.push([lower+1, nums[i]-1])
            }
            lower = nums[i++]
        }

        if (upper > nums[nums.length-1]) {
            res.push([nums[nums.length-1] + 1, upper])
        }

        return res
    }
}
