class TNode {
    nodes: TNode[] = new Array(26).fill(null)
    word: boolean = false
}

class PrefixTree {
    root = new TNode()
    constructor() {}

    private index(word: string, i: number): number {
        return word.charCodeAt(i) - 97
    }
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        if (word.length === 0) return;

        let curr = this.root
        for (let c of word) {
            let i = c.charCodeAt(0) - 97
            if (!curr.nodes[i]) {
                curr.nodes[i] = new TNode()
            }
            curr = curr.nodes[i]
        }
        curr.word = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        if (word.length === 0) return;

        let curr = this.root
        for (let c of word) {
            let i = c.charCodeAt(0) - 97
            if (!curr.nodes[i])
                return false
            curr = curr.nodes[i]
        }
        return curr.word
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        if (prefix.length === 0) return;

        let curr = this.root
        for (let c of prefix) {
            let i = c.charCodeAt(0) - 97
            if (!curr.nodes[i])
                return false
            curr = curr.nodes[i]
        }
        return true
    }
}
