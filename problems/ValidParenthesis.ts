/**
 * Function to check if a string of parentheses/brackets/braces is valid.
 * Valid means every opening bracket has a matching closing bracket in the correct order.
 * Example:
 *   - Input: "()[]{}"  -> Output: true
 *   - Input: "(]"      -> Output: false
 */
function isValid(s: string): boolean {
  // ✅ Step 1: If the string length is odd, it can’t possibly be valid.
  if (s.length % 2 !== 0) return false;

  // ✅ Step 2: Use a stack to track opening brackets as we go.
  const stack: string[] = [];

  // ✅ Step 3: Define a map to know which opening bracket corresponds to which closing bracket.
  const map: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // ✅ Step 4: Loop through every character in the string.
  for (let char of s) {
    // If it’s an opening bracket, push it onto the stack.
    if ("({[".includes(char)) {
      stack.push(char);
    } else {
      /**
       * If it’s a closing bracket:
       *   - Pop the last opening bracket from the stack.
       *   - Check if it matches the correct one using `map`.
       *   - If not matching → Invalid string.
       */
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  // ✅ Step 5: If stack is empty, all brackets matched correctly.
  // If not, there are leftover unmatched brackets → Invalid.
  return stack.length === 0;
}
