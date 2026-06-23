class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let b: Set<string>[] = Array.from({ length: 9 }, () => new Set())
        let r: Set<string>[] = Array.from({ length: 9 }, () => new Set())
        let c: Set<string>[] = Array.from({ length: 9 }, () => new Set())

        const block = (i: number, j: number): number => {
            return Math.trunc(i / 3) * 3 + Math.trunc(j / 3)
            // if (i < 3 && j < 3) return 0
            // else if (i < 3 && j < 6) return 1
            // else if (i < 3 && j < 9) return 2
            // else if (i < 6 && j < 3) return 3
            // else if (i < 6 && j < 6) return 4
            // else if (i < 6 && j < 9) return 5
            // else if (i < 9 && j < 3) return 6
            // else if (i < 9 && j < 6) return 7
            // else if (i < 9 && j < 9) return 8
        }

        // for (let i = 0 ; i < 9 ; i++) {
        //     b.set(i, new Set())
        //     v.set(i, new Set())
        //     h.set(i, new Set())
        // }

        for (let i = 0 ; i < 9 ; i++) {
            for (let j = 0 ; j < 9 ; j++) {
                if (board[i][j] == ".") continue
                let num = board[i][j]

                if (b[block(i,j)].has(num)) return false
                if (r[i].has(num)) return false
                if (c[j].has(num)) return false

                b[block(i,j)].add(num)
                r[i].add(num)
                c[j].add(num)
            }
        }
        return true;
    }
}
