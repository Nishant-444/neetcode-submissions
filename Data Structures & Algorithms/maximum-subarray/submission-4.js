class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let curSum = 0;
        let L = 0;

        for (let R = 0; R < nums.length; R++) {
            if (curSum < 0) {
                curSum = 0;
                L = R;
            }

            curSum += nums[R];

            if (curSum > maxSum) {
                maxSum = curSum;
            }
        }
        return maxSum;
    }
}
