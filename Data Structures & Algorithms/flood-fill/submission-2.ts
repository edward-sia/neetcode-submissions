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
        // const visited = new Set()
        const startColor = image[sr][sc]

        if (startColor == color) return image;

        while (queue.length > 0) {
            const node = queue.pop()

            // if (visited.has(node[0]+"-"+node[1])) continue;
            if (image[node[0]][node[1]] != startColor) continue;

            // visited.add(node[0]+"-"+node[1])
            image[node[0]][node[1]] = color

            if (node[0]-1 >= 0 && image[node[0]-1][node[1]] == startColor)
                queue.push([node[0]-1, node[1]])
            if (node[0]+1 < image.length && image[node[0]+1][node[1]] == startColor)
                queue.push([node[0]+1, node[1]])
            if (node[1]-1 >= 0 && image[node[0]][node[1]-1] == startColor)
                queue.push([node[0], node[1]-1])
            if (node[1]+1 < image[0].length && image[node[0]][node[1]+1] == startColor)
                queue.push([node[0], node[1]+1])
        }

        return image;
    }
}
