class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums: number[], k: number): boolean {

        let total = 0
        let rem: Map<number, number> = new Map()

        rem.set(0, -1)
        for (let i = 0 ; i < nums.length ; i++) {
            total += nums[i]
            let r = total % k
            if (!rem.has(r)) {
                rem.set(r, i)
            } else if (i - rem.get(r) > 1) {
                return true
            }
        }

        return false
    }
}
