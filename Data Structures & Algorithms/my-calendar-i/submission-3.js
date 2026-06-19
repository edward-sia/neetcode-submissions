class MyCalendar {

    booked = []
    constructor() {}

    /**
     * @param {number} startTime
     * @param {number} endTime
     * @return {boolean}
     */
    book(startTime, endTIme) {
        // // console.log(...this.booked)
        // this.booked.sort((a, b) => a[0] - b[0])

        for (let i = 0 ; i < this.booked.length ; i++) {
            const [s, e] = this.booked[i]
            if (endTIme > s && startTime < e) {
                return  false
            }
        }
        this.booked.push([startTime, endTIme])
        // console.log(startTime + " " + endTIme)

        // console.log([...this.booked])
        return true
    }
}
