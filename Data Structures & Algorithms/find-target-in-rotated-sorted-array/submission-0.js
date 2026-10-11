class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
       let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            if (target === nums[mid]) return mid;

            if (nums[left] <= nums[mid]) {
                // If target is in the left sorted half
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                // If target is in the right sorted half
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return -1;
    }
}
