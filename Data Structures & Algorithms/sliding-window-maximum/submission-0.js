class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length
        const output = new Array(n-k+1)

        const q = new Deque()
        let L=0, R=0

        while(R<n){
            while(q.size()&& nums[q.back()]<nums[R]){
                q.popBack()
            }
            q.pushBack(R)

            if(L>q.front()){
                q.popFront()
            }

            if(R+1>=k){
                output[L]=nums[q.front()]
                L++
            }
            R++
        }
        return output
    }
}
