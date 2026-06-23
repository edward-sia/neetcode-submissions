class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    visited = new Set<string>()

    exist(board: string[][], word: string): boolean {
        let ch = new Map<string, number[][]>()

        for (let i = 0 ; i < board.length ; i++) {
            for (let j = 0 ; j < board[0].length ; j++) {
                let c = board[i][j]
                if (!ch.has(c)) {
                    ch.set(c, [])
                }
                ch.get(c).push([i, j])
            }
        }
        console.log(ch)

        return this.helper(board, word, 0, ch, null)
    }

    helper(board: string[][], word: string, i: number, ch: Map<string, number[][]>, currLoc: number[] | null): boolean {
        if (i === word.length) {
            return true
        }
        let w = word[i]
        let loc = ch.get(w)
        if (!loc)
            return false

        for (let nextLoc of loc.values()) {
            if (this.visited.has(nextLoc.toString())) continue
            this.visited.add(nextLoc.toString())
            if (this.isAdjacent(currLoc, nextLoc)) {
                if (this.helper(board, word, i+1, ch, nextLoc)) {
                    return true
                }
            }
            this.visited.delete(nextLoc.toString())
        }
        return false
    }

    isAdjacent(curr: number[] | null, next: number[]) {
        if (curr === null) return true
        return (Math.abs(curr[0] - next[0]) + Math.abs(curr[1] - next[1])) === 1
    }
}
