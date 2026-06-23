class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        let res = []

        nums.sort((a, b) => a - b)
        this.helper(nums, target, 0, [], res)
        return res
    }

    private helper(nums: number[], remaining: number, start: number, curr: number[], res: number[][]) {
        if (remaining === 0) {
            res.push([...curr])
        }
        for (let i = start ; i < nums.length ; i++) {
            if (nums[i] > remaining)
                continue
            curr.push(nums[i])
            let newRemaining = remaining - nums[i]
            this.helper(nums, newRemaining, i, curr, res)
            curr.pop()
        }
    }
}
