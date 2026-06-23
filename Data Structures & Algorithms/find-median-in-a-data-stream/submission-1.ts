class MedianFinder {

    nums: number[] = []
    constructor() {}

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        // this.nums.push(num) // o(1) insertion

        // bfs approach keeping list ordered during insertion time
        let left = 0, right = this.nums.length - 1

        while (left <= right) {
            let mid = Math.trunc((left + right) / 2)
            // console.log(" -- " + mid + " - " + this.nums)
            if (num < this.nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        this.nums.splice(left, 0 , num)
        // console.log(left + " " + this.nums)
    }

    /**
     * @return {number}
     */
    findMedian(): number {
        // this.nums.sort((a, b) => a - b) // o(nlogn)

        if (this.nums.length % 2 === 1) {
            return this.nums[(this.nums.length-1)/2]
        } else {
            return (this.nums[this.nums.length/2 - 1] + this.nums[this.nums.length/2]) / 2
        }
    }
}
