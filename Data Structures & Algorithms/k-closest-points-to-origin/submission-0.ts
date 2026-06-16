class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        let pq = new MinPriorityQueue((a) => {
            let distA = Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2))
            return distA
        })
        for (let i = 0 ; i < points.length ; i++) {
            pq.push(points[i])
        }

        return pq.toArray().slice(0, k)
    }
}
