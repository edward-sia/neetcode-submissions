class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        
        let descWindow = []
        let res = []

        for (let i = 0 ; i < nums.length ; i++) {
            if (descWindow.length > 0 && descWindow[0] < i - k + 1) {
                descWindow.shift()
            }

            while (descWindow.length > 0 && nums[i] > nums[descWindow[descWindow.length-1]]) {
                descWindow.pop()
            }
            descWindow.push(i)

            if (i >= k - 1) {
                res.push(nums[descWindow[0]])
            }
        }

        return res
    }
}
