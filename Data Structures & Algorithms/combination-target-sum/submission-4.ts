class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        let res = []

        this.helper(nums, target, 0, [], res)
        return res
    }

    private helper(nums: number[], remaining: number, start: number, curr: number[], res: number[][]) {
        for (let i = start ; i < nums.length ; i++) {
            if (nums[i] > remaining)
                continue
            curr.push(nums[i])
            remaining -= nums[i]

            if (remaining === 0) {
                res.push([...curr])
            } else if (remaining > 0) {
                this.helper(nums, remaining, i, curr, res)
            }
            remaining += nums[i]
            curr.pop()
        }
    }

    private sum(list: number[]) {
        return list.reduce((acc, curr) => acc + curr, 0)
    }
}
