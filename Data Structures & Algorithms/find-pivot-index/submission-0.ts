class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        let lr = [...nums]
        let rl = [...nums]

        for (let i = 1 ; i < nums.length ; i++) {
            lr[i] = lr[i-1] + lr[i]
        }

        for (let i = nums.length - 2 ; i >= 0 ; i--) {
            rl[i] = rl[i+1] + rl[i]
        }

        for (let i = 0 ; i < nums.length ; i++) {
            if (lr[i] == rl[i]) return i
        }
        return -1
    }
}
