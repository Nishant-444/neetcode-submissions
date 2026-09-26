class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        let L = 0;
  let R = height.length - 1
  let maxArea = 0

  while (L < R) {

    let length = R - L
    let minHeight = Math.min(height[L], height[R])
    let area = length * minHeight

    maxArea = Math.max(maxArea, area)

    if (height[L] < height[R]) {
      L++
    } else R--
  }
  return maxArea
    }
}
