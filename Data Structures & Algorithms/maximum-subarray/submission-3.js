class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = 0;

    for (let num of nums) {
      currentSum = Math.max(currentSum, 0) + num;
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }
}
