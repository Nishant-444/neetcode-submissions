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
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let head = new ListNode(0, null);
        let tail = head;
        while (l1 || l2) {
            let sum = carry;

            sum += l1 ? l1.val : 0;
            sum += l2 ? l2.val : 0;

            let digit = sum % 10;
            carry = Math.floor(sum / 10);

            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;

            let node = new ListNode(digit);
            tail.next = node;
            tail = node;
        }
        if (carry > 0) tail.next = new ListNode(carry);
        return head.next;
    }
}
