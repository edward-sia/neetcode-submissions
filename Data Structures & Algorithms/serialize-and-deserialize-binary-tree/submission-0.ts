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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root: TreeNode | null): string {
        if (root === null) return "N"

        let left = root.left === null ? "N" : this.serialize(root.left)
        let right = root.right === null ? "N" : this.serialize(root.right)

        let res = "" + root.val + "," + left + "," + right

        return res
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        let res = data.split(",")

        let node = this.des(data, res, [0])

        return node
    }

    des(data: string, res: string[], i: number[]): TreeNode | null {
        if (i[0] >= res.length || res[i[0]] === "N") return null

        let root = new TreeNode(parseInt(res[i[0]]))

        if (res[++i[0]] !== "N")
            root.left = this.des(data, res, i)
        if (res[++i[0]] !== "N")
            root.right = this.des(data, res, i)
        
        return root
    }
}
