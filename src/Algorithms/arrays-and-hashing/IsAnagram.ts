
export default function isAnagram(s: string, t: string): boolean {
  const anagramMap = new Map<string, number>();

  for (const char of s) {
    if (anagramMap.has(char)) {
      anagramMap.set(char, anagramMap.get(char)! + 1);
    } else {
      anagramMap.set(char, 1);
    }
  }

  for (const char of t) {
    if (anagramMap.has(char)) {
      if (anagramMap.get(char) === 1) {
        anagramMap.delete(char);
      } else {
        anagramMap.set(char, anagramMap.get(char)! - 1);
      }
    } else {
      return false;
    }
  }

  if (anagramMap.size > 0) {
    return false;
  }
  return true;
}

