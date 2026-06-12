class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums: number[]): boolean {
        if (nums.length < 2) {
            return true;
        }
        let increasing: boolean = null;

        for (let i = 0 ; i < nums.length-1 ; i++) {
            if (nums[i] === nums[i+1]) {
                continue;
            } else if (nums[i] < nums[i+1]) {
                if (increasing === null || increasing === true) {
                    increasing = true;
                    continue;
                } else {
                    return false;
                }
            } else if (nums[i] > nums[i+1]) {
                if (increasing === null || increasing === false) {
                    increasing = false;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
}
