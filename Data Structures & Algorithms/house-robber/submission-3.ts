class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const dp = []

        if (nums.length == 1) {
            return nums[0]
        } else if (nums.length == 2) {
            return nums[0] > nums[1] ? nums[0] : nums[1]
        }

        dp.push(nums[0])
        dp.push(nums[1] > nums[0] ? nums[1] : nums[0])
        for (let i = 2 ; i < nums.length ; i++) {
            let max = Math.max(nums[i] + dp[i-2], dp[i-1])
            dp.push(max)
        }
        return dp.pop()
    }
}
