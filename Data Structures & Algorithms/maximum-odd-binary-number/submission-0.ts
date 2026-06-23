class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    maximumOddBinaryNumber(s: string): string {
        let one = 0

        for (let c of s) {
            if (c === '1')
                one++
        }

        return "1".repeat(one-1) + "0".repeat(s.length - one) + "1"
    }
}
