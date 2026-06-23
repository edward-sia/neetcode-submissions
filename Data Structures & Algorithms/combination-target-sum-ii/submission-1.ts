class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {

        function backtrack(candidates: number[], remain: number, start: number, curr: number[], res: number[][]) {
            if (remain === 0) {
                res.push([...curr])
                return
            }

            for (let i = start ; i < candidates.length ; i++) {
                if (candidates[i] > remain) continue
                if (i > start && candidates[i-1] === candidates[i]) continue

                curr.push(candidates[i])
                backtrack(candidates, remain - candidates[i], i+1, curr, res)
                curr.pop()
            }
        }

        let res = []
        candidates.sort((a, b) => a - b)

        backtrack(candidates, target, 0, [], res)
        return res
    }
    
}
