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
     * @return {number[]}
     */
    postorderTraversal(root: TreeNode | null): number[] {
        let res = []

        this.traverse(root, res)

        return res
    }

    traverse(node: TreeNode | null, res: number[]) {
        if (node == null) return
        this.traverse(node.left, res)
        this.traverse(node.right, res)
        res.push(node.val)
    }
}
