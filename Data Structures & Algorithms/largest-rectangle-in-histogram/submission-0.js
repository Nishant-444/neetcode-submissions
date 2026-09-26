class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        const stack = [];

        const h = [...heights, 0];

        for (let i = 0; i < h.length; i++) {
            while (stack.length > 0 && h[i] < h[stack.at(-1)]) {

                const height = h[stack.pop()];

                const width = stack.length === 0
                    ? i
                    : i - stack[stack.length - 1] - 1;

                maxArea = Math.max(maxArea, height * width);
            }

            stack.push(i);
        }

        return maxArea;
    }
}
