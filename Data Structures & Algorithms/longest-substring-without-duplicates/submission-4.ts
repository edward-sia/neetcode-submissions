class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if (s.length <= 1)
            return s.length
        
        let length = 1
        const n = s.length
        let r = 0, l = 0

        const v = new Set()
        while (r < n) {
            while (v.has(s[r])) {
                v.delete(s[l++])
            }
            v.add(s[r])
            length = Math.max(length, r - l + 1)
            r++
        }

        return length
    }
}
