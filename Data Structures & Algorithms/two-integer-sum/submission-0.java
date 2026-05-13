class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0 ; i < nums.length ; i++) {
            int opposite = target - nums[i];

            if (map.containsKey(opposite)) {
                return new int[]{ map.get(opposite), i };
            }
            map.put(nums[i], i);
        }

        return new int[] {};
    }
}
