class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix: number[][]): void {
        let left = 0, right = matrix.length - 1

        while (left < right) {
            for (let i = 0 ; i < right - left ; i++) {
                let top = left, bottom = right

                // top left moves right
                let topLeft = matrix[top][left + i]

                // bottom left moves up
                matrix[top][left + i] = matrix[bottom - i][left]
                
                // bottom right moves left
                matrix[bottom - i][left] = matrix[bottom][right - i]
                matrix[bottom][right - i] = matrix[top + i][right]
                matrix[top + i][right] = topLeft
            }
            right--
            left++
        }
    }
}
