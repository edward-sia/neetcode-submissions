class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = ""

        for (let str of strs) {
            res += str.length + "#" + str
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     * 
     * ["Hello", "World"]
     * "5#Hello5#World"
     */
    decode(str: string): string[] {
        let i = 0;
        let res: string[] = []

        while (i < str.length) {
            let j = i
            while (str[j] != '#') {
                j++
            }

            let length = parseInt(str.slice(i, j))

            j++;
            res.push(str.slice(j, j + length))
            i = j + length;
        }
        return res
    }
}
