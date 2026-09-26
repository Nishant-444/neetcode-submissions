class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        const stack = []

        for (let char of s) {
            if (char === '[' || char === '(' || char === '{') {
                stack.push(char);
            } else if (stack.pop() !== map[char]) {
                return false
            }
        }
        return stack.length === 0
    }
}
