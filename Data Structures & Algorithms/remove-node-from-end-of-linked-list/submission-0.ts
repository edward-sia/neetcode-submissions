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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let i = 0

        let curr = head
        while (curr !== null) {
            i++
            curr = curr.next
        }

        let del = i - n
        let root = new ListNode()
        root.next = head
        curr = root
        i = 0
        while (i < del) {
            curr = curr.next
            i++
        }
        curr.next = curr.next.next

        return root.next
    }
}
