// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head === null) return null

        let l1 = head

        while(l1){
            let l2 = new Node(l1.val)
            l2.next = l1.random
            l1.random = l2
            l1=l1.next
        }

        let newHead =head.random

        l1=head
        while(l1){
            let l2 = l1.random
            l2.random = l2.next ? l2.next.random : null
            l1 = l1.next
        }

        l1=head
        while(l1){
            let l2=l1.random
            l1.random = l2.next
            l2.next = l1.next ? l1.next.random : null
            l1 = l1.next
        }

        return newHead
    }
}
