class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(
        image: number[][],
        sr: number,
        sc: number,
        color: number,
    ): number[][] {
        const queue = [[sr, sc]]
        let head = 0;
        const startColor = image[sr][sc]

        if (startColor == color) return image;

        while (head < queue.length) {
            const [r, c] = queue[head++]

            if (r < 0 || c < 0 || r >= image.length || c >= image[0].length)
                continue;
            if (image[r][c] != startColor) continue;

            image[r][c] = color

            queue.push([r-1, c])
            queue.push([r+1, c])
            queue.push([r, c-1])
            queue.push([r, c+1])
        }

        return image;
    }
}
