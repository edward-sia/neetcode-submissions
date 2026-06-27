class LRUCache {
    private list: Map<number, number>
    private capacity: number
    /**
     * @param {number} capacity
     */
    constructor(_capacity: number) {
        this.list = new Map<number, number>
        this.capacity = _capacity
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (this.list.has(key)) {
            let val = this.list.get(key)
            this.list.delete(key)
            this.list.set(key, val)
            return val
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.list.has(key)) {
            this.list.delete(key)
        } else if (this.list.size >= this.capacity) {
            this.list.delete(this.list.keys().next().value)
        }
        this.list.set(key, value)
    }
}
