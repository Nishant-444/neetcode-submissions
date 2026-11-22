class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let count = new Map();

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];

            if (count.has(complement)) {
                return [count.get(complement), i];
            }
            count.set(nums[i], i);
        }
        return []
    }
}
