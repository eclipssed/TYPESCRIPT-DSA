function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const partner = target - nums[i]!;
    if (numMap.has(partner)) {
      return [i, numMap.get(partner)!];
    }
    numMap.set(nums[i]!, i);
  }
  return [];
}
