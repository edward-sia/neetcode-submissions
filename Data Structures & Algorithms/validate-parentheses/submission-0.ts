class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {

        const map = new Map([
            ['(', ')'],
            ['{', '}'],
            ['[', ']']
        ])
        const stack = []

        for (const c of s) {
            if (map.has(c)) {
                stack.push(c)
            } else if (map.get(stack[stack.length-1]) == c) {
                stack.pop()
            } else {
                return false
            }
        }
        return stack.length == 0
    }
}
