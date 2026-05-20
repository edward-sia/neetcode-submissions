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
    public List<List<Integer>> levelOrder(TreeNode root) {
        Deque<TreeNode> queue = new ArrayDeque<>();
        List<List<Integer>> res = new ArrayList<>();

        if (root == null)
            return res;
        int i = 0, l = 0, r = 1;
        queue.addLast(root);
        while (queue.size() != 0) {
            List<Integer> list = new ArrayList<>();
            while (l < r) {
                TreeNode node = queue.pollFirst();
                l++;
                if (node.left != null) {
                    queue.addLast(node.left);
                }
                if (node.right != null) {
                    queue.addLast(node.right);
                }
                list.add(node.val);
            }
            res.add(list);
            l = 0;
            r = queue.size();
        }
        return res;
    }
}
