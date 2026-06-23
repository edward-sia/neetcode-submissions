class MedianFinder {

    nums: number[] = []
    large = new MaxPriorityQueue()
    small = new MinPriorityQueue()
    constructor() {}

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        if (this.large.size() == 0 || num > this.large.front()) {
            this.small.push(num)
        } else {
            this.large.push(num)
        }

        if (this.large.size() - this.small.size() >= 2) {
            this.small.push(this.large.pop())
        } else if (this.small.size() - this.large.size() >= 2) {
            this.large.push(this.small.pop())
        }
        // this.nums.push(num) // Opt1: o(1) insertion

        // // Opt2: binary search insertion keeping list ordered during insertion time
        // let left = 0, right = this.nums.length - 1

        // while (left <= right) {
        //     let mid = Math.trunc((left + right) / 2)
        //     // console.log(" -- " + mid + " - " + this.nums)
        //     if (num < this.nums[mid]) {
        //         right = mid - 1
        //     } else {
        //         left = mid + 1
        //     }
        // }
        // this.nums.splice(left, 0 , num)
    }

    /**
     * @return {number}
     */
    findMedian(): number {
        console.log(this.large.toArray())
        console.log(this.small.toArray())
        if (this.large.size() > this.small.size()) {
            return this.large.front()
        } else if (this.small.size() > this.large.size()) {
            return this.small.front()
        }
        return (this.large.front() + this.small.front()) / 2
        // this.nums.sort((a, b) => a - b) // Opt1: o(nlogn)

        // // Shared Opt1 and Opt2
        // if (this.nums.length % 2 === 1) {
        //     return this.nums[(this.nums.length-1)/2]
        // } else {
        //     return (this.nums[this.nums.length/2 - 1] + this.nums[this.nums.length/2]) / 2
        // }
    }
}
