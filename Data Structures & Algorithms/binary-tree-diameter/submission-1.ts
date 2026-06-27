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

    res = [0]
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        
        this.helper(root)
        return this.res[0]
    }

    helper(root: TreeNode | null): number {
        if (root === null) return 0

        let left = this.helper(root.left)
        let right = this.helper(root.right)

        this.res[0] = Math.max(left + right, this.res[0])
        return 1 + Math.max(left, right)
    }
}
