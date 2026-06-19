class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {

        let nums = []
        for (let op of operations) {
            if ("C" === op) {
                nums.pop()
            } else if ("D" === op) {
                nums.push(nums[nums.length-1] * 2)
            } else if ("+" === op) {
                nums.push(nums[nums.length-1] + nums[nums.length-2])
            } else {
                nums.push(parseInt(op))
            }
        }

        let total = 0
        for (let num of nums) {
            total += num
        }
        return total
    }
}
