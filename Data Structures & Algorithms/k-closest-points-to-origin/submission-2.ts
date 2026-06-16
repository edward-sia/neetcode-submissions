class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        let pq = new MaxPriorityQueue((a) => a[0])
        for (let [x, y] of points) {
            let dist = Math.sqrt(x * x + y * y)
            pq.push([dist, x, y])

            if (pq.size() > k) {
                pq.dequeue()
            }
        }
        let res = []
        while (!pq.isEmpty()) {
            let [_, x, y] = pq.dequeue()
            res.push([x, y])
        }

        return res
    }
}
