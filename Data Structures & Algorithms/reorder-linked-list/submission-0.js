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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        // finding midpoint
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        
        // slow is at midpoint
        // reverse the list from slow till end
        let curr = slow;
        let prev = null;
        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        // prev is at starting of list 2 which is reversed
        let first = head;
        let second = prev;

        while (second.next !== null) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}
