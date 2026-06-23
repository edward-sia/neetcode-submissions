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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let root = new ListNode()
        let curr = root

        let i = list1, j = list2
        while (i && j) {
            if (i.val < j.val) {
                curr.next = i
                i = i.next
            } else {
                curr.next = j
                j = j.next
            }
            curr = curr.next
        }
        while (i != null) {
            curr.next = i
            i = i.next
            curr = curr.next
        }
        while (j != null) {
            curr.next = j
            j = j.next
            curr = curr.next
        }

        return root.next;
    }
}
