class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length - 1
  let res = 0
  while (left < right) {
    let waterAtPoint = Math.min(heights[left], heights[right]) * (right - left)

    res = Math.max(waterAtPoint, res)

    if (heights[left] < heights[right]) {
      left++
    } else if (heights[left] > heights[right]) {
      right--
    } else {
      left++
      right--
    }
  }

  return res
    }
}
