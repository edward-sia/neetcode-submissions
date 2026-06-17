class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {

        let prev = nums[0]
        let toBeSpliced = []
        for (let i = 1 ; i < nums.length ; i++) {
            if (prev == nums[i]) {
                toBeSpliced.push(i)
            }
            prev = nums[i]
        }
        for (let i = toBeSpliced.length - 1 ; i >= 0 ; i--) {
            nums.splice(toBeSpliced[i], 1)
        }

        return nums.length
    }
}
