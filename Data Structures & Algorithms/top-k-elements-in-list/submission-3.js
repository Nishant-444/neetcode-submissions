class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map();
        let bucket = [];
        let res = [];

// first get the frequency map
        for (let num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

// then add the nums to the bucket
        for (let [num, freq] of count) {
            bucket[freq] = (bucket[freq] || new Set()).add(num);
        }

// get the top k element and return them
        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i]) res.push(...bucket[i]);
            if (res.length === k) break;
        }
        return res;
    }
}
