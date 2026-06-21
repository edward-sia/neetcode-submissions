class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums, k) {

        let res = 0
        for (let i = 0 ; i < nums.length ; i++) {
            let total = nums[i]
            if (total < k) {
                res++
            }
            for (let j = i+1 ; j < nums.length ; j++) {
                total *= nums[j]
                if (total < k) {
                    res++
                }
            }
        }

        return res
    }
}
