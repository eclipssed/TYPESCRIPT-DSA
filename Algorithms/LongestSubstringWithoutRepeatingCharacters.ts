function lengthOfLongestSubstring(s: string): number {
  // Map will store characters and their most recent index in the string
  const hashMap: Map<string, number> = new Map<string, number>();

  // Left pointer marks the start of our current window
  let left: number = 0;

  // Variable to keep track of the longest valid substring length found so far
  let longest: number = 0;

  // Expand the window by moving the right pointer one step at a time
  for (let right = 0; right < s.length; right++) {
    let char = s[right];

    // If the current char has been seen before:
    //   shift 'left' to the position right after the previous occurrence.
    //   BUT: ensure 'left' never moves backward, only forward.
    if (hashMap.has(char!)) {
      left = Math.max(left, hashMap.get(char!)! + 1);
    }

    // The current window length is (right - left + 1)
    // Compare it with the longest we've seen and update if necessary
    longest = Math.max(longest, right - left + 1);

    // Record/update the current character's latest index
    hashMap.set(char!, right);
  }

  // After scanning the whole string, 'longest' holds the answer
  return longest;
}
