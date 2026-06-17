/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (!head) return null

        let stack = []
        let curr = head
        while (curr != null) {
            stack.push(curr)
            curr = curr.next
        }
        

        let root = new ListNode()
        curr = root
        while (stack.length > 0) {
            curr.next = stack.pop()
            curr = curr.next
            curr.next = null
        }
        return root.next
    }
}
