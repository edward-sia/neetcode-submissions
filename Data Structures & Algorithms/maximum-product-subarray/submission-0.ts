class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        let maxProd = -Infinity
        for (let i = 0 ; i < nums.length ; i++) {
            let currProd = nums[i]
            maxProd = Math.max(maxProd, currProd)
            for (let j = i+1 ; j < nums.length ; j++) {
                currProd *= nums[j]
                maxProd = Math.max(currProd, maxProd)
            }
        }

        return maxProd
    }
}
