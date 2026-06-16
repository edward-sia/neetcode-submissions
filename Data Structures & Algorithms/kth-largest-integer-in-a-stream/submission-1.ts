class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    private _k
    private _pq

    constructor(k: number, nums: number[]) {
        this._k = k
        this._pq = MinPriorityQueue.fromArray(nums)
        for (let num of nums) {
            this._pq.enqueue(num)
            if (this._pq.size() > k) {
                this._pq.dequeue()
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this._pq.enqueue(val)
        if (this._pq.size() > this._k) {
            this._pq.dequeue()
        }
        return this._pq.front()
    }
}
