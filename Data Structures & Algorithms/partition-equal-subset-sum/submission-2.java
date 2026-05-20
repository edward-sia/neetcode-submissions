class Solution {
    public boolean canPartition(int[] nums) {
        int sum = Arrays.stream(nums).sum();
        if (sum % 2 == 1) {
            return false;
        }

        int n = nums.length;
        int target = sum / 2;
        boolean[] dp = new boolean[target+1];

        dp[0] = true;
        for (int i = 1 ; i <= n ; i++) {
            boolean[] newDP = new boolean[target+1];
            for (int j = 1 ; j <= target ; j++) {
                if (nums[i-1] <= j) {
                    newDP[j] = dp[j] || dp[j-nums[i-1]];
                } else {
                    newDP[j] = dp[j];
                }
            }
            dp = newDP;
        }
        return dp[target];
    }
}
