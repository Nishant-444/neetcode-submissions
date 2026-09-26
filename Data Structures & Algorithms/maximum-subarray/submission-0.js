class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {let maxSum = nums[0];
  let currentSum = 0;

  for (let num of nums) {
      currentSum = Math.max(currentSum, 0)
      currentSum += num
      maxSum = Math.max(currentSum, maxSum
      )
    
  }

  return maxSum}
}
