/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        if (node === null) return null

        let oldToNew = new Map<number, Node>()
        this.dfs(node, oldToNew)

        return oldToNew.get(node.val)
    }

    dfs(oldN: Node | null, oldToNew: Map<number, Node>) {
        if (oldN === null) return
        if (oldToNew.has(oldN.val)) return

        let newN = new Node(oldN.val, [])
        oldToNew.set(oldN.val, newN)
        
        for (let nei of oldN.neighbors) {
            this.dfs(nei, oldToNew)
            newN.neighbors.push(oldToNew.get(nei.val))
        }
    }
}
