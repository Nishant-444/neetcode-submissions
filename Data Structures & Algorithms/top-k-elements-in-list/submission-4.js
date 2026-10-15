class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map();
        for (let num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        let bucket = [];
        for (let [num, freq] of count) {
            bucket[freq] = (bucket[freq] || new Set()).add(num);
        }

        let res = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i]) res.push(...bucket[i]);
            if (res.length === k) break;
        }
        return res;
    }
}
