class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums: number[], k: number): number {
        let res = 0
        for (let i = 0 ; i < nums.length ; i++) {
            let total = 1
            for (let j = i ; j < nums.length ; j++) {
                total *= nums[j]
                if (total < k) {
                    res++
                }
            }
        }

        return res
    }
}
