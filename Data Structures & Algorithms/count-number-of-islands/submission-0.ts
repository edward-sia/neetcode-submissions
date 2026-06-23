class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let total = 0

        for (let i = 0 ; i < grid.length ; i++) {
            for (let j = 0 ; j < grid[0].length ; j++) {
                if (grid[i][j] === "1") {
                    total++
                    this.collapse(grid, i, j)
                }
            }
        }
        return total
    }

    collapse(grid: string[][], i: number, j: number) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
            return
        }
        if (grid[i][j] !== "1")
            return

        grid[i][j] = "0"
        this.collapse(grid, i-1, j)
        this.collapse(grid, i+1, j)
        this.collapse(grid, i, j-1)
        this.collapse(grid, i, j+1)
    }
}
