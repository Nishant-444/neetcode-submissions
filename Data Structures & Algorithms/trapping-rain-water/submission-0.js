class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {let R = height.length - 1
  let L = 0;
  let maxR = height[R];
  let maxL = height[L];
  let water = 0
  while (L < R) {
    if (maxL < maxR) {
      L++
      maxL = Math.max(maxL, height[L])
      water += maxL - height[L]
    } else {
      R--
      maxR = Math.max(maxR, height[R])
      water += maxR - height[R]

    }
  }
  return water;}
}
