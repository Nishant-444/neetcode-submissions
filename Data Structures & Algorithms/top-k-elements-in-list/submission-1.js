class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent = function (nums, k) {
  let map = new Map()
  const result = []
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  const arrayOfMap = [...map]
  arrayOfMap.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) {
    result.push(arrayOfMap[i][0]);
  }
  return result;
};
}
