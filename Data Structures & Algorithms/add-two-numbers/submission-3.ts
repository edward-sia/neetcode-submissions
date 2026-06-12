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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    carry = 0;
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        if (l1 == null && l2 == null) return null;
        
        const root = new ListNode();
        root.next = this.add(l1, l2)

        return root.next;
    }

    add(l1: ListNode | null, l2: ListNode | null): ListNode {
        const l1val = l1?.val ?? 0
        const l2val = l2?.val ?? 0
        const node = new ListNode((l1val + l2val + this.carry) % 10, null)
        this.carry = (l1val + l2val + this.carry) >= 10 ? 1 : 0;
        if (l1?.next != null || l2?.next != null) {
            node.next = this.add(l1?.next, l2?.next);
        } else if (this.carry == 1) {
            node.next = new ListNode(1)
        }
        return node;
    }
}
