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
    public int kthSmallest(TreeNode root, int k) {
        PriorityQueue<TreeNode> q = new PriorityQueue<>(Comparator.comparing(n -> n.val));

        bfs(root, q);
        while (k-1 > 0) {
            q.poll();
            k--;
        }
        return q.poll().val;
    }

    private void bfs(TreeNode node, PriorityQueue<TreeNode> q) {
        if (node == null)
            return;
        
        bfs(node.left, q);
        q.add(node);
        bfs(node.right, q);
    }
}
