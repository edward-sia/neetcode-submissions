/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root: TreeNode | null): number {
        let res = [root.val]

        const dfs = (node: TreeNode | null) => {
            if (node === null) return 0

            let leftMax = dfs(node.left)
            let rightMax = dfs(node.right)

            leftMax = Math.max(leftMax, 0)
            rightMax = Math.max(rightMax, 0)

            let join = leftMax + rightMax + node.val
            res[0] = Math.max(join, res[0])

            return node.val + Math.max(leftMax, rightMax)
        }

        dfs(root)

        return res[0]
    }
}
