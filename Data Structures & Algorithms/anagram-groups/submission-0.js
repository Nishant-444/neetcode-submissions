class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
  const result = []

  for (let str of strs) {
    // sort the string
    let sortedStr = str.split('').sort().join('');

    // 2. If key doesn't exist in map, create empty array
    if(!map.has(sortedStr)){
      map.set(sortedStr,[])
    }
    // 3. Add original string to that key's array
    map.get(sortedStr).push(str);
  }

  // 4. Return all the grouped arrays
  return [...map.values()]
     }
}