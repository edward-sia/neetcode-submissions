class MyStack {

    private list: number[] = []
    constructor() {}

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.list.push(x);
    }

    /**
     * @return {number}
     */
    pop(): number {
        return this.list.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.list[this.list.length-1];
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.list.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
