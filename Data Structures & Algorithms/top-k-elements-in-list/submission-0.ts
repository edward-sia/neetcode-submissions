class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counts = new Map<number, number>()

        for (const num of nums) {
            if (!counts.has(num)) counts.set(num, 0)

            counts.set(num, counts.get(num) + 1)
        }

        const sortedCounts = new Map([...counts].sort((a, b) => b[1] - a[1]))

        // console.log([...sortedCounts])
        return [...sortedCounts.keys()].slice(0, k)
    }
}
