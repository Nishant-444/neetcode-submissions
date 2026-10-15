class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeft = new Array(height.length);
        let maxRight = new Array(height.length);
        let minLR = [];

        let max = 0;
        for (let i = 0; i < height.length; i++) {
            max = Math.max(max, height[i]);
            maxLeft[i] = max;
        }

        max = 0;
        for (let i = height.length - 1; i >= 0; i--) {
            max = Math.max(max, height[i]);
            maxRight[i] = max;
        }

        for (let i = 0; i < height.length; i++) {
            minLR[i] = Math.min(maxLeft[i], maxRight[i]);
        }
        let totalWater = 0;
        for (let i = 0; i < height.length; i++) {
            if (minLR[i] - height[i] >= 0) totalWater += minLR[i] - height[i];
        }
        return totalWater;
    }
}
