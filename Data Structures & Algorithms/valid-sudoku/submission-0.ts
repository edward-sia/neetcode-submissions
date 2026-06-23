class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let b = new Map<number, Set<number>>()
        let v = new Map<number, Set<number>>()
        let h = new Map<number, Set<number>>()

        const block = (i, j) => {
            if (i < 3 && j < 3) return 0
            else if (i < 3 && j < 6) return 1
            else if (i < 3 && j < 9) return 2
            else if (i < 6 && j < 3) return 3
            else if (i < 6 && j < 6) return 4
            else if (i < 6 && j < 9) return 5
            else if (i < 9 && j < 3) return 6
            else if (i < 9 && j < 6) return 7
            else if (i < 9 && j < 9) return 8
        }

        for (let i = 0 ; i < 9 ; i++) {
            b.set(i, new Set())
            v.set(i, new Set())
            h.set(i, new Set())
        }

        for (let i = 0 ; i < 9 ; i++) {
            for (let j = 0 ; j < 9 ; j++) {
                if (board[i][j] == ".") continue
                let num = parseInt(board[i][j])

                if (b.get(block(i,j)).has(num)) return false
                if (v.get(i).has(num)) return false
                if (h.get(j).has(num)) return false

                b.get(block(i,j)).add(num)
                v.get(i).add(num)
                h.get(j).add(num)
            }
        }
        return true;
    }
}
