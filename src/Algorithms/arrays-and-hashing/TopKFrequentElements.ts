function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i]!, (freq.get(nums[i]!) ?? 0) + 1);
  }

  const bucket: number[][] = Array(nums.length + 1)
    .fill(null)
    .map(() => []);
  for (const [key, value] of freq) {
    bucket[value]?.push(key);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    for (const num of bucket[i]!) {
      result.push(num);
      if (result.length === k) return result;
    }
  }
  return result;
}
