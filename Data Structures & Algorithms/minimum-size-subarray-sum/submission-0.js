class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let L = 0,
            total = 0,
            length = Infinity;

        for (let R = 0; R < nums.length; R++) {
            total += nums[R];
            while (total >= target) {
                length = Math.min(R - L + 1, length);
                total -= nums[L];
                L++;
            }
        }

        if (length == Infinity) return 0;
        return length;
    }
}
