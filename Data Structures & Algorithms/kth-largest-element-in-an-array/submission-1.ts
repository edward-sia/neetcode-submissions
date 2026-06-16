
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        let pq = new MaxPriorityQueue()
        for (let i = 0 ; i < nums.length ; i++) {
            pq.enqueue(nums[i])
        }
        for (let i = 1 ; i < k ; i++) {
            pq.pop()
        }
        return pq.front()
    }
}
