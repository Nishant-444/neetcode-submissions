class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let res = 0;
        let curSum = 0;
        for (let i = 0; i < k; i++) {
            curSum += arr[i];
        }
        const kTimesThreshold = k * threshold;
        if (curSum >= kTimesThreshold) res++;

        for (let L = 1; L <= arr.length - k; L++) {
            curSum -= arr[L - 1];
            curSum += arr[L + k - 1];
            if (curSum >= kTimesThreshold) res++;
        }
        return res;
    }
}
