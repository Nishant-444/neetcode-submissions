class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = new Map();
        for (let string of strs) {
            // not an empty array but a 0 filled array
            let count = new Array(26).fill(0);
            // fill this array with char counts of a string
            for (let char of string) {
                count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            // create a key to set inside the res Map and separate the counts by # so we dont get like "1123" instead of "1#12#3"
            let key = count.join("#");
            if (!res.has(key)) {
                res.set(key, []);
            }
            // push the string to the value array[] for that key
            res.get(key).push(string);
        }
        return Array.from(res.values());
    }
}
