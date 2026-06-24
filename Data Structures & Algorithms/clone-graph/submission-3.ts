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

        let oldToNew = new Map<Node, Node>()
        

        return this.dfs(node, oldToNew)
    }

    dfs(oldN: Node | null, oldToNew: Map<Node, Node>): Node | null {
        if (oldToNew.has(oldN))
            return oldToNew.get(oldN)

        let newN = new Node(oldN.val, [])
        oldToNew.set(oldN, newN)

        for (let nei of oldN.neighbors) {
            newN.neighbors.push(this.dfs(nei, oldToNew))
        }
        return newN
    }
}
