class Solution {
    hasDuplicate(nums) {
        let map = new Map();
        
        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                return true;  // Found duplicate!
            }
            map.set(nums[i], 1);  // Mark as seen
        }
        
        return false;  // No duplicates
    }
}