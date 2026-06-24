class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {

        // // Kadane, keeping running curr sum
        // let right = 1
        // let sum = nums[0]
        // let biggestSum = nums[0]
        // while (right < nums.length ) {
        //     sum = Math.max(nums[right], sum + nums[right])
        //     biggestSum = Math.max(biggestSum, sum)
        //     right++
        // }

        // return biggestSum
        // // end Kadane

        let dp = [...nums]

        for (let i = 1 ; i < nums.length ; i++) {
            dp[i] = Math.max(dp[i], dp[i] + dp[i-1])
        }

        return Math.max(...dp)
    }
}
