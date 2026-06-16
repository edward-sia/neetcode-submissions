class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        
        let descWindow = []
        let res = []
        let head = 0

        for (let i = 0 ; i < nums.length ; i++) {
            let leftBoundary = i - k
            while (descWindow.length > head && descWindow[head] <= leftBoundary) {
                head++
            }

            while (descWindow.length > head && nums[i] > nums[descWindow[descWindow.length-1]]) {
                descWindow.pop()
            }
            descWindow.push(i)

            if (i >= k - 1) {
                res.push(nums[descWindow[head]])
            }
        }

        return res
    }
}
