class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        const counts = new Map<number, number>()

        const largestCount = nums.length / 2
        for (const num of nums) {
            if (!counts.has(num)) counts.set(num, 0)
            counts.set(num, counts.get(num) + 1)
        }

        for (const [key, val] of counts.entries()) {
            if (val > largestCount) return key
        }

        return 0;
    }
}
