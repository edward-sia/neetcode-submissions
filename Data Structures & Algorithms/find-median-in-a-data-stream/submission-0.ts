class MedianFinder {

    nums: number[] = []
    constructor() {}

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        this.nums.push(num)
    }

    /**
     * @return {number}
     */
    findMedian(): number {
        this.nums.sort((a, b) => a - b)

        if (this.nums.length % 2 === 1) {
            return this.nums[(this.nums.length-1)/2]
        } else {
            return (this.nums[this.nums.length/2 - 1] + this.nums[this.nums.length/2]) / 2
        }
    }
}
