class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        let dp = [...cost]

        for (let i = 2 ; i < cost.length ; i++) {
            dp[i] = dp[i] + Math.min(dp[i-1], dp[i-2])
        }

        return Math.min(dp[dp.length-1], dp[dp.length-2])
    }
}
