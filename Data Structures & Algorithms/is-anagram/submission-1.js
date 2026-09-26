class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let map1 = new Map();
        let map2 = new Map();

        for (let i = 0; i < s.length; i++) {
            let charS = s.charAt(i);
            map1.set(charS, (map1.get(charS) || 0) + 1);

            let charT = t.charAt(i);
            map2.set(charT, (map2.get(charT) || 0) + 1);
        }
        for (let [key, val] of map1) {
            if (!map2.has(key) || map2.get(key) !== val) {
                return false;
            }
        }
        return true;
    }
}
