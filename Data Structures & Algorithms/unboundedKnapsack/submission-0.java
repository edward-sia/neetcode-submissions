class Solution {
    public int maximumProfit(List<Integer> profit, List<Integer> weight, int capacity) {
        
        int N = profit.size();
        int M = capacity+1;
        int[] dp = new int[M];

        for (int j = 1 ; j < M ; j++) {
            if (j - weight.get(0) >= 0) {
                dp[j] = dp[j-weight.get(0)] + profit.get(0);
            }
        }

        for (int i = 1 ; i < N ; i++) {
            int[] tmp = new int[M];
            for (int j = 1 ; j < M ; j++) {
                int skipped = dp[j];
                int include = 0;
                if (j - weight.get(i) >= 0) {
                    include = profit.get(i) + tmp[j-weight.get(i)];
                }
                tmp[j] = Math.max(skipped, include);
            }
            dp = tmp;
        }

        return dp[M-1];
    }
}
