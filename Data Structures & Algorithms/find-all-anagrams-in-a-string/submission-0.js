class Solution {
    /**
     * @param {string} s
     * @return {number[]}
     */
    findAnagrams(s, p) {
         // s = "abab", p = "ab"
  if (p.length > s.length) return []
  let count = Array(26).fill(0) // p
  let window = Array(26).fill(0)
  let res = []
  const a = 'a'.charCodeAt(0)

  for (let i = 0; i < p.length; i++) {
    count[p.charCodeAt(i) - a]++
    window[s.charCodeAt(i) - a]++
  }

  if (count.toString() === window.toString()) res.push(0)

  for (let i = p.length; i < s.length; i++) {
    window[s.charCodeAt(i) - a]++
    window[s.charCodeAt(i - p.length) - a]--
    if (count.toString() === window.toString()) res.push(i - p.length + 1)

  }
  return res
    }
}
