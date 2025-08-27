function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  const stack: string[] = [];
  const map: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if ("({[".includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
