class TreeNode {
    int key;
    int value;
    TreeNode left;
    TreeNode right;

    public TreeNode(int key, int value) {
        this.key = key;
        this.value = value;
    }
}

class TreeMap {

    private TreeNode root;
    public TreeMap() {
        root = null;
    }

    public void insert(int key, int val) {
        TreeNode node = new TreeNode(key, val);
        if (root == null) {
            root = node;
            return;
        }

        TreeNode curr = root;
        while (true) {
            if (curr.key > node.key) {
                if (curr.left == null) {
                    curr.left = node;
                    return;
                }
                curr = curr.left;
            } else if (curr.key < node.key) {
                if (curr.right == null) {
                    curr.right = node;
                    return;
                }
                curr = curr.right;
            } else {
                curr.value = val;
                return;
            }
        }
    }

    public int get(int key) {
        TreeNode curr = root;

        while (curr != null) {
            if (curr.key == key) return curr.value;
            else if (curr.key > key) curr = curr.left;
            else if (curr.key < key) curr = curr.right;
        }
        return -1;
    }

    public int getMin() {
        TreeNode curr = getMinHelper(root);
        return curr == null ? -1 : curr.value;
    }

    private TreeNode getMinHelper(TreeNode node) {
        while (node != null && node.left != null)
            node = node.left;
        return node;
    }

    public int getMax() {
        TreeNode curr = root;

        while (curr != null && curr.right != null)
            curr = curr.right;

        return curr == null ? -1 : curr.value;
    }

    public void remove(int key) {
       root = removeHelper(root, key);
    }

    private TreeNode removeHelper(TreeNode node, int key) {
        if (node == null)
            return null;
        
        if (key > node.key) {
            node.right = removeHelper(node.right, key);
        } else if (key < node.key) {
            node.left = removeHelper(node.left, key);
        } else {
            if (node.left == null) {
                node = node.right;
            } else if (node.right == null) {
                node = node.left;
            } else {
                TreeNode nextNode = getMinHelper(node.right);
                node.key = nextNode.key;
                node.value = nextNode.value;
                node.right = removeHelper(node.right, nextNode.key);
            }
        }
        return node;
    }

    public List<Integer> getInorderKeys() {
        List<Integer> list = new ArrayList<>();

        traverse(list, root);
        return list;
    }

    private void traverse(List<Integer> list, TreeNode node) {
        if (node == null)
            return;

        traverse(list, node.left);
        list.add(node.key);
        traverse(list, node.right);
    }
}
