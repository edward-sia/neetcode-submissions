/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    private int ans = -1;
    public int kthSmallest(TreeNode root, int k) {
        
        bfs(root, new int[]{k});
        return ans;
    }

    private void bfs(TreeNode node, int[] k) {
        if (node == null)
            return;
        
        bfs(node.left, k);
        k[0]--;
        if (k[0] == 0) {
            ans = node.val;
            return;
        }
        bfs(node.right, k);
    }
}
