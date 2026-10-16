class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
       let globalMax = nums[0], globalMin = nums[0];
  let curMax = 0, curMin = 0, total = 0;

  for (let num of nums) {
    curMax = Math.max(curMax + num, num);
    curMin = Math.min(curMin + num, num);

    globalMax = Math.max(globalMax, curMax);
    globalMin = Math.min(globalMin, curMin);

    total += num;
  }

  return globalMax < 0
    ? globalMax
    : Math.max(globalMax, total - globalMin);
    }
}


// 