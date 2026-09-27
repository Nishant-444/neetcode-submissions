class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];
        let prefix = [];
        let postfix = new Array(nums.length).fill(1);

        // prefix prod
        for (let i = 1; i < nums.length; i++) {
            prefix[0] = nums[0];
            prefix[i] = prefix[i - 1] * nums[i];
        }

        // postfix prod
        for (let i = nums.length - 1; i >= 0; i--) {
            postfix[nums.length-1] = nums[nums.length-1];
            postfix[i] = postfix[i + 1] * nums[i];
        }

        // result array
        res.push(postfix[1]);
        for (let i = 1; i < nums.length - 1; i++) {
            res.push(prefix[i - 1] * postfix[i + 1]);
        }
        res.push(prefix[prefix.length - 2]);
        return res;
    }
}
