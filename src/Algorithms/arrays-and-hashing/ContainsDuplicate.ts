function containsDuplicate(nums: number[]): boolean {
  const dupMap = new Map<number, boolean>();
  for (const num of nums) {
    if (dupMap.has(num)) {
      return true;
    }
    dupMap.set(num, true);
  }

  return false;
}
