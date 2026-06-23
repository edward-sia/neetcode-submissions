class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        let res = []
        let seen = new Set<string>()

        this.helper(nums, target, [], res, seen)
        return res
    }

    private helper(nums: number[], target: number, curr: number[], res: number[][], seen: Set<string>) {
        for (let num of nums) {
            curr.push(num)
            let cSum = this.sum(curr)
            if (cSum === target) {
                let sortedCurr = [...curr].sort((a, b) => a - b)
                if (!seen.has(sortedCurr.toString())) {
                    res.push([...sortedCurr])
                    seen.add(sortedCurr.toString())
                }
            } else if (cSum < target) {
                this.helper(nums, target, curr, res, seen)
            }
            curr.pop()
        }
    }

    private sum(list: number[]) {
        return list.reduce((acc, curr) => acc + curr, 0)
    }
}
