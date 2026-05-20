class Solution {
    public int maxProfit(int[] prices) {
        int x = 0, y = 1, profit = 0;

        if (prices.length <= 1) return 0;

        // x = 1, y = 2
        while (x < prices.length-1 && y < prices.length) {
            if (prices[x] >= prices[y]) {
                x = y;
            } else {
                profit = Math.max(profit, prices[y] - prices[x]);
            }
            y++;
        }
        return profit;
    }
}
