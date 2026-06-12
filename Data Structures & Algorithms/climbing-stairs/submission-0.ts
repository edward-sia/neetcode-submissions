class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let i = 1;
        let j = 1;
        for (let a = 2 ; a <= n ; a++) {
            let tmp = i + j
            i = j
            j = tmp
        }
        return j
    }
}
