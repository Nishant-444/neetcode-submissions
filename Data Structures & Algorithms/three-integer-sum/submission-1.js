class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] === nums[i - 1] && i > 0) continue;
            else if (nums[i] > 0) break;
            let target = -nums[i];
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                let sum = nums[left] + nums[right];
                if (sum < target) left++;
                else if (sum > target) right--;
                else {
                    res.push([nums[i], nums[left], nums[right]]);
                    right--;
                    left++;
                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                }
            }
        }
        return res;
    }
}
