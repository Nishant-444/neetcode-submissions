class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixProdArray = []
        let prefixTotal = 1
        for (let num of nums) {
            prefixTotal *= num
            prefixProdArray.push(prefixTotal);
        }

        let postfixProdArray = []
        let postfixTotal = 1
        for (let i = nums.length - 1; i >= 0; i--) {
            // prod = prod * A[i]
            // postfix[i] = prod
            postfixTotal *= nums[i]
            postfixProdArray[i] = postfixTotal;
        }

        let result = []
        let i = 0
        while (i < nums.length) {
            let left = i > 0 ? prefixProdArray[i - 1] : 1;
            let right = i < nums.length - 1 ? postfixProdArray[i + 1] : 1;
            result.push(left * right)
            i++
        }
        return result;
    }
}
