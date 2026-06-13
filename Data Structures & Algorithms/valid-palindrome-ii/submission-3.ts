class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {

        let l = 0, r = s.length - 1;

        while (l < r) {
            if (s[l] == s[r]) {
                l++;
                r--;
            }
            // console.log(s[l] + " " + s[r])
            // if (r - l == 1) {
            //     return true
            // }
            else {
                return this.isPalindrome(l, r - 1, s) || this.isPalindrome(l+1, r, s)
            }
        }
        return true
    }

    isPalindrome(l: number, r: number, s: string): boolean {
        while (l <= r) {
            if (s[l] != s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
