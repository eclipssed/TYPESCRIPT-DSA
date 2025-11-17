function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const word of strs) {
    let key: string;

    // --------------------------------------------------
    // OPTION 1: SORT-BASED SIGNATURE (Toggle ON/OFF)
    // Slow but simple (O(k log k) per word).
    // Example: 'eat' => 'aet'
    // --------------------------------------------------
    // key = word.split("").sort().join("");

    // --------------------------------------------------
    // OPTION 2: BUCKET-FREQUENCY SIGNATURE (Toggle ON/OFF)
    // Fastest option (O(k)).
    // Supports uppercase + lowercase if you enable both blocks.
    // Generates a signature like "1,0,0,2,..." representing letter counts.
    // --------------------------------------------------
    const bucket = Array(52).fill(0);

    for (const char of word) {
      // --- UPPERCASE HANDLING (toggle ON/OFF) ---
      // Handles 'A' to 'Z' at indices 0–25
      if (char >= "A" && char <= "Z") {
        const idx = char.charCodeAt(0) - "A".charCodeAt(0);
        bucket[idx]++;
      }

      // --- LOWERCASE HANDLING (toggle ON/OFF) ---
      // Handles 'a' to 'z' at indices 26–51
      if (char >= "a" && char <= "z") {
        const idx = char.charCodeAt(0) - "a".charCodeAt(0) + 26;
        bucket[idx]++;
      }
    }

    // Use bucket-based signature
    key = bucket.join(",");

    // --------------------------------------------------
    // Push the current word into its mapped group
    // --------------------------------------------------
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(word);
  }

  // Convert Map values into array of groups
  return Array.from(map.values());
}
