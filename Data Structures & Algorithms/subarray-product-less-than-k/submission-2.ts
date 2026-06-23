class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums: number[], k: number): number {
        // let res = 0
        // for (let i = 0 ; i < nums.length ; i++) {
        //     let total = 1
        //     for (let j = i ; j < nums.length ; j++) {
        //         total *= nums[j]
        //         if (total < k) {
        //             res++
        //         }
        //     }
        // }

        // return res

        let left = 0, right = 0

        let sum = 1
        let total = 0
        while (right < nums.length) {
            sum *= nums[right]
            while (left < right && sum >= k) {
                sum /= nums[left]
                left++
            }

            if (sum < k) {
                total += right - left + 1
            }

            right++
        }
        return total
    }
}
