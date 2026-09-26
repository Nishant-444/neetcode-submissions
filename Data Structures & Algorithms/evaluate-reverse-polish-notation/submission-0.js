class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
  for (let char of tokens) {
    if (char === '*' || char === '-' || char === '+' || char === '/') {
      const b = stack.pop()
      const a = stack.pop()
      switch (char) {
        case '*':
          stack.push(a * b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '+':
          stack.push(a + b);
          break;
        case '/':
          stack.push(Math.trunc(a / b));
          break;
      }
    }
    else stack.push(parseInt(char));
  }
  return stack[0]
    }
}
