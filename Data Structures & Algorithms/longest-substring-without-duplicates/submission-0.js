class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set();
        let L = 0;
        let res = 0;

        for (let R = 0; R < s.length; R++) {
            while (charSet.has(s[R])) {
                charSet.delete(s[L]);
                L++;
            }
            charSet.add(s[R]);
            res = Math.max(res, R - L + 1);
        }
        return res;
    }
}
