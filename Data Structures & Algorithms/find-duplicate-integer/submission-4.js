class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // let count = new Map();

        // for (let num of nums) {
        //     if (count.get(num) >= 1) {
        //         return num;
        //     } else {
        //         count.set(num,(count.get(num) || 0) + 1);
        //     }
        // }

        let fast = 0;
        let slow = 0;

        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];

            if (slow === fast) break;
        }

        let slow2 = 0;
        while (true) {
            slow = nums[slow];
            slow2 = nums[slow2];

            if (slow === slow2) return slow;
        }
    }
}
