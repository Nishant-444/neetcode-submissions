class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
  let map = new Map();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (const char of t) {
    if(!map.has(char))return false
    map.set(char, map.get(char) - 1);
    if (map.get(char) < 0) return false;
  }
  return true;
    }
}
