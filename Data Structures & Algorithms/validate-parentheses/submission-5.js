class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = new Array();
        for (let char of s) {
            if (char === "(" || char === "[" || char === "{") {
                stack.push(char);
                continue;
            }
            let top = stack.pop();
            if (
                (char === ")" && top !== "(") ||
                (char === "}" && top !== "{") ||
                (char === "]" && top !== "[")
            ) {
                return false;
            }
        }
        return stack.length === 0;
    }
}
