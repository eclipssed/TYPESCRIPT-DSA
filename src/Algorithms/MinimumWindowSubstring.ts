function minWindow(s: string, t: string): string {
  // Step 1: Build a frequency map of all characters in string t
  // This tells us how many of each character we must find in s
  const tHashMap = new Map<string, number>();
  for (let c of t) {
    tHashMap.set(c, (tHashMap.get(c) || 0) + 1);
  }

  // Step 2: Initialize helpers for sliding window
  const windowCount = new Map<string, number>(); // stores char counts for current window
  let have = 0; // how many unique chars in current window meet the required count
  let need = tHashMap.size; // total unique chars we must match
  let resLength = Infinity; // length of the best (smallest) valid window
  let res = [-1, -1]; // start and end indices of best window
  let left = 0; // left pointer of the sliding window

  // Step 3: Expand the window with the right pointer
  for (let right = 0; right < s.length; right++) {
    let c = s[right]!;

    // Add current character to windowCount
    windowCount.set(c, (windowCount.get(c) || 0) + 1);

    // If this character matches required frequency, increase 'have'
    if (tHashMap.has(c) && windowCount.get(c) === tHashMap.get(c)) {
      have++;
    }

    // Step 4: Contract window from the left while it is valid (have === need)
    while (have === need) {
      let leftChar = s[left]!;

      // Try to shrink the window by removing the leftmost char
      windowCount.set(leftChar, windowCount.get(leftChar)! - 1);

      // If removing leftChar breaks the requirement, reduce 'have'
      if (
        tHashMap.has(leftChar) &&
        windowCount.get(leftChar)! < tHashMap.get(leftChar)!
      ) {
        have--;
      }

      // Update result if this window is smaller than previous best
      if (right - left + 1 < resLength) {
        res = [left, right];
        resLength = right - left + 1;
      }

      // Move left pointer forward to keep shrinking
      left++;
    }
  }

  // Step 5: Return the smallest valid window substring (or "" if none found)
  const [leftIndex, rightIndex] = res;
  return resLength === Infinity ? "" : s.slice(leftIndex, rightIndex! + 1);
}
