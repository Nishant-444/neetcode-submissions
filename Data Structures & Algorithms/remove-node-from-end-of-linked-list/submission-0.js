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
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);

        let slow = dummy;
        let fast = dummy;

        // Move fast n steps ahead
        while (n > 0) {
            fast = fast.next;
            n--;
        }

        // Move both pointers
        while (fast.next !== null) {
            fast = fast.next;
            slow = slow.next;
        }

        // Remove nth node from end
        slow.next = slow.next.next;

        return dummy.next;
    }
}
