class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s: string): number {

        const roman = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        let num = 0

        for (let i = 0 ; i < s.length ; i++) {
            const curr = roman[s[i]]
            const next = roman[s[i+1]]

            if (next > curr) {
                num -= curr
            } else {
                num += curr
            }
        }

        return num
    }
}
