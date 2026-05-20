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
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        Deque<TreeNode> q = new ArrayDeque<>();
        int l = 0, r = 1;

        if (root == null)
            return res;
        
        q.addLast(root);
        while (q.size() > 0) {
            while (l < r) {
                TreeNode node = q.pollFirst();
                if (node.left != null) q.addLast(node.left);
                if (node.right != null) q.addLast(node.right);
                l++;
                if (l == r)
                    res.add(node.val);
            }
            l = 0;
            r = q.size();
        }
        return res;
    }
}
