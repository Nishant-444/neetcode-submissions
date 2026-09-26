class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
            const [temp, idx] = stack.pop();
            answer[idx] = i - idx;
        }
        stack.push([temperatures[i], i]);
    }

    return answer;
    }
}
