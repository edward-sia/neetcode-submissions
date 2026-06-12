class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if (strs.length <= 1) {
            return strs[0]
        }
        let res = ""
        let i = 0
        while (i < strs[0].length) {
            let same = true
            for (let j = 1 ; j < strs.length ; j++) {
                if (strs[0][i] != strs[j][i]) {
                    same = false;
                    break;
                }
            }
            if (!same) break;
            i++
        }
        return strs[0].slice(0, i)
    }
}
