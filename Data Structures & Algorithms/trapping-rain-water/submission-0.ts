class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {

        const lr = [...height]
        const rl = [...height]

        let total = 0

        for (let i = 1 ; i < height.length ; i++) {
            if (lr[i-1] > lr[i])
                lr[i] = lr[i-1]
        }

        for (let i = height.length - 2 ; i >= 0 ; i--) {
            if (rl[i+1] > rl[i])
                rl[i] = rl[i+1]
        }

        for (let i = 1 ; i < height.length - 1 ; i++) {
            total += Math.min(lr[i], rl[i]) - height[i]
        }

        return total
    }
}
