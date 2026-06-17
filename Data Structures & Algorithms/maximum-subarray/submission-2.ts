class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {

        let left = 0, right = 1
        let sum = nums[left]
        let biggestSum = nums[left]
        while (right < nums.length ) {
            // if (nums[right] > sum) {
            //     sum = nums[right]
            //     left = right
            // } else {
            //     sum += nums[right]
            // }
            sum = Math.max(nums[right], sum + nums[right])
            biggestSum = Math.max(biggestSum, sum)
            // console.log(biggestSum)
            // console.log("running " + sum)
            right++
        }

        return biggestSum
    }
}
