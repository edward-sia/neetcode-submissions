class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        let res: number[][] = []
        let curr = []
        res.push([...curr])
        this.backtrack(nums, 0, curr, res)
        return res
    }

    backtrack(nums: number[], start: number, curr: number[], res: number[][]) {
        for (let i = start ; i < nums.length ; i++) {
            curr.push(nums[i])
            res.push([...curr])
            this.backtrack(nums, i+1, curr, res)
            curr.pop()
        }
    }
}
