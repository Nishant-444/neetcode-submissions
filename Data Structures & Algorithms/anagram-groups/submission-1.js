class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = new Map();
        for (let string of strs) {
            let count = new Array(26).fill(0);
            for (let char of string) {
                count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            let key = count.join("#");
            if (!res.has(key)) {
                res.set(key, []);
            }
            res.get(key).push(string);
        }
        return Array.from(res.values());
    }
}
