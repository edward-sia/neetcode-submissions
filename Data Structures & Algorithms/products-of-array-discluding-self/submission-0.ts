class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const pre = [1]
        const post = [1]

        for (let i = 1 ; i < nums.length ; i++) {
            pre[i] = pre[i-1] * nums[i-1]
            post[i] = post[i-1] * nums[nums.length-i]
        }

        const res = []
        for (let i = 0 ; i < nums.length ; i++) {
            res[i] = pre[i] * post[nums.length-1-i]
        }

        return res;
    }
}
