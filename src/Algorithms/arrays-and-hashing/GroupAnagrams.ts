function groupAnagrams(strs: string[]): string[][] {
  const anagramMap = new Map<string, string[]>();

  for (const word of strs) {
    const key = word.split("").sort().join("");

    if (!anagramMap.has(key)) anagramMap.set(key, []);
    anagramMap.get(key)?.push(word);
  }
  return Array.from(anagramMap.values());
}
