class Solution {
    public int maximumProfit(List<Integer> profit, List<Integer> weight, int capacity) {
        int N = profit.size(), M = capacity;
        int[][] dp = new int[N][M+1];

        // for (int i = 0 ; i < N ; i++) {
        //     for (int j = 0 ; j < M+1 ; j++) {
        //         System.out.print(dp[i][j]);
        //     }
        //     System.out.println();
        // }
        for (int j = 1 ; j < M+1 ; j++) {
            dp[0][j] = j - weight.get(0) >= 0 ? profit.get(0) : 0;
        }
        
        for (int i = 1 ; i < N ; i++) {
            for (int j = 1 ; j < M+1 ; j++) {
                int skip = dp[i-1][j];

                int include = 0;
                if (j - weight.get(i) >= 0) {
                    include = profit.get(i) + dp[i-1][j-weight.get(i)];
                }
                dp[i][j] = Integer.max(include, skip);
            }
        }

        return dp[N-1][M];
    }
}
