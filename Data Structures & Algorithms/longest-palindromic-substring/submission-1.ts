class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {

        function expand(l: number, r: number): number[] {
            while (l >= 0 && r < s.length && s[l] == s[r]) {
                l--
                r++
            }
            return [l+1, r-1]
        }
        
        let start = 0, end = 0   
        for (let i = 0 ; i < s.length ; i++) {
            
            const [l1, r1] = expand(i, i)
            const [l2, r2] = expand(i, i+1)

            // const maxLen = Math.max(maxOdd, maxEven)
            
            if (r1 - l1 > end - start) {
                start = l1
                end = r1
            }
            if (r2 - l2 > end - start) {
                start = l2
                end = r2
            }
        }
        return s.slice(start, end+1)
    }

    
}
