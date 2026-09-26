class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        // for(let i =0; i<nums.length;i++){
        //     if(nums[i]===nums[i+1] || nums[i]===nums[i-1]){
        //         nums.splice(i,1)
        //     }
        // }
        let i = 0
        while (i < nums.length) {
            if (nums[i] === nums[i + 1] || nums[i] === nums[i - 1]) {
                nums.splice(i, 1)
                continue;
            }
            i++;
        }
        return nums.length;
    }
}
