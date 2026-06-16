class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        return [...nums].sort((a, b) => b - a).at(k-1)
    }
}
