class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {

        let l = 1, r = 1;

        while (r < nums.length) {
            if (nums[r] !== nums[r-1]) {
                nums[l++] = nums[r]
            }
            r++
        }
        return l
    }
}
