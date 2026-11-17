class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let count = new Map();

        for (let num of nums) {
            if (count.get(num) >= 1) {
                return num;
            } else {
                count.set(num,(count.get(num) || 0) + 1);
            }
        }
    }
}
