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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        let root = new ListNode()
        for (let i = 0 ; i < lists.length ; i++) {
            root.next = this.merge2Lists(root.next, lists[i])
        }

        return root.next
    }

    merge2Lists(l1: ListNode, l2: ListNode): ListNode {
        let root = new ListNode()
        let curr = root
        let i = l1, j = l2;

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
        // while (i) {
        //     curr.next = i
        //     i = i.next
        //     curr = curr.next
        // }
        // while (j) {
        //     curr.next = j
        //     j = j.next
        //     curr = curr.next
        // }
        // Above can be refined to
        curr.next = i ? i : j

        return root.next
    }
}
