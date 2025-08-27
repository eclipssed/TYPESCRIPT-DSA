function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const partner = target - nums[i];
    if (map.has(partner)) {
      return [map.get(partner), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
