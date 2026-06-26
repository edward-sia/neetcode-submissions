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
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {
        if (root === null) return true

        if (root.left !== null && root.left.val >= root.val) {
            return false
        }
        if (root.right !== null && root.right.val <= root.val) {
            return false
        }
        return this.isValidBST(root.left) && this.isValidBST(root.right)
         && this.isValidRightGrandChild(root.right, root) && this.isValidLeftGrandChild(root.left, root)
    }

    isValidLeftGrandChild(node: TreeNode | null, root: TreeNode) {
        let ptr = node
        if (ptr === null || ptr.right === null) return true

        while (ptr.right !== null) {
            ptr = ptr.right
        }
        return ptr.val < root.val
    }

    isValidRightGrandChild(node: TreeNode | null, root: TreeNode) {
        let ptr = node
        if (ptr === null || ptr.left === null) return true
        
        while (ptr.left !== null) {
            ptr = ptr.left
        }
        return ptr.val > root.val
    }
}
