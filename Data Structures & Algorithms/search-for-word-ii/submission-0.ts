class TNode {
    children: TNode[];
    word = false;
    
    constructor() {
        this.children = new Array(26).fill(null)
        this.word = false
    }

    addWord(word: string) {
        let curr: TNode = this
        for (let c of word) {
            let i = c.charCodeAt(0) - 'a'.charCodeAt(0)
            if (!curr.children[i]) {
                curr.children[i] = new TNode()
            }
            curr = curr.children[i]
        }
        curr.word = true
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]): string[] {
        let root = new TNode()
        for (const word of words) {
            root.addWord(word)
        }

        let seen = new Set<string>()
        let res = new Set<string>()
        let ROW = board.length, COL = board[0].length
        const dfs = (r: number, c: number, node: TNode, str: string) => {
            if (r < 0 || c < 0 || r >= ROW || c >= COL) {
                return
            }
            let idx = board[r][c].charCodeAt(0) - 'a'.charCodeAt(0)
            let currStr = `${r},${c}`
            if (node.children[idx] === null || seen.has(currStr)) {
                return
            }
        
            seen.add(currStr)
            let newStr = str + board[r][c]
            if (node.children[idx].word) {
                res.add(newStr)
            }

            dfs(r-1, c, node.children[idx], newStr)
            dfs(r+1, c, node.children[idx], newStr)
            dfs(r, c-1, node.children[idx], newStr)
            dfs(r, c+1, node.children[idx], newStr)
            
            seen.delete(currStr)
        }

        for (let r = 0 ; r < ROW ; r++) {
            for (let c = 0 ; c < COL ; c++) {
                dfs(r, c, root, '')
            }
        }
        return [...res]
    }
}
