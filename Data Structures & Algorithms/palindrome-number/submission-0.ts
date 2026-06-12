class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x: number): boolean {
        const str = ("" + x)
        const rvs = str.split("").reverse().join("")

        return str === rvs
    }
}
