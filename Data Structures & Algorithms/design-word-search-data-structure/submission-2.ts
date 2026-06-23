class TNode {
    nodes = new Array(26).fill(null)
    word: boolean = false
}

class WordDictionary {

    root = new TNode()
    constructor() {}

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        if (word.length === 0) return

        let curr = this.root
        for (let c of word) {
            let i = c.charCodeAt(0) - 97
            if (!curr.nodes[i])
                curr.nodes[i] = new TNode()
            curr = curr.nodes[i]
        }
        curr.word = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        return this.dfs(0, this.root, word)
    }

    private dfs = (i: number, root: TNode, word: string): boolean => {
        if (i === word.length) 
            return root.word
        let curr = root

        if (word[i] === '.') {
            for (let j = 0 ; j < 26 ; j++) {
                if (curr.nodes[j] != null) {
                    if (this.dfs(i+1, curr.nodes[j], word))
                        return true
                }
            }
            return false
        } else {
            let idx = word.charCodeAt(i) - 97
            if (!curr.nodes[idx])
                return false
            return this.dfs(i+1, curr.nodes[idx], word)
        }
    }
}
