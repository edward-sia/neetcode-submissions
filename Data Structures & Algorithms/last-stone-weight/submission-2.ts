class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        let pq = new MaxPriorityQueue()
        for (let s of stones) {
            pq.enqueue(s)
        }
        while (pq.size() >= 2) {
            let s1 = pq.pop()
            let s2 = pq.pop()
            if (s1-s2 != 0) {
                pq.push(s1-s2)
            }
        }
        return pq.size() > 0 ? pq.front() : 0
    }
}
