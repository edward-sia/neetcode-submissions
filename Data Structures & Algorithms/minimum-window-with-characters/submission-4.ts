class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t == '' || t.length > s.length) return ''

        let countT: Record<string, number> = {}
        let window: Record<string, number> = {}
        for (let c of t) {
            countT[c] = 1 + (countT[c] ?? 0)
        }

        let l = 0, r = 0; // tracking variable window
        let resLen = Infinity
        let res = [-1, -1]
        let have = 0, need = Object.keys(countT).length // tracking haves and needs
        while (r < s.length) {
            let c = s[r]
            window[c] = 1 + (window[c] || 0)

            if (countT[c] && window[c] == countT[c]) {
                have++
            }

            while (have == need) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1
                    res = [l, r]
                }
                let lc = s[l]

                window[lc]--
                if (countT[lc] && window[lc] < countT[lc]) {
                    have--
                }
                l++
            }
            r++
        }

        return resLen === Infinity ? '' : s.slice(res[0], res[1]+1)
    }
}
