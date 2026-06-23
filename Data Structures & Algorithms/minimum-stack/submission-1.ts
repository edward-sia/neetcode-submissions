class MinStack {

    nums: number[] = []
    descNums: number[] = []
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.nums.push(val)
        if (this.descNums.length === 0 || val <= this.descNums[this.descNums.length-1]) {
            this.descNums.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        let val = this.nums.pop()
        if (this.descNums.length > 0 && val === this.descNums[this.descNums.length-1]) {
            this.descNums.pop()
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.nums[this.nums.length-1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.descNums[this.descNums.length-1]
    }
}
