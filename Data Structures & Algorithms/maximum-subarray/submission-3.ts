class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {

        let right = 1
        let sum = nums[0]
        let biggestSum = nums[0]
        while (right < nums.length ) {
            sum = Math.max(nums[right], sum + nums[right])
            biggestSum = Math.max(biggestSum, sum)
            right++
        }

        return biggestSum
    }
}
