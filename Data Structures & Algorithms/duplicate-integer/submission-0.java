class Solution {
    public boolean hasDuplicate(int[] nums) {
        Set<Integer> exists = new HashSet<>();
        for (int i = 0 ; i < nums.length ; i++) {
            if (exists.add(nums[i]) == false)
                return true;
        }
        return false;
    }
}