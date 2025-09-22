function subarraySum(nums: number[], k: number): number {
  // Counter to store the total number of subarrays with sum = k
  let count: number = 0;

  // Running sum of elements as we iterate through the array
  let prefixSum: number = 0;

  // Map to store prefix sums and how many times each has appeared
  // Key   → prefix sum value
  // Value → frequency of that prefix sum
  const prefixSumMap = new Map<number, number>();

  // Seed the map with (0 → 1) because:
  // - The sum of an empty subarray is 0
  // - This allows us to detect subarrays starting from index 0
  prefixSumMap.set(0, 1);

  // Traverse the array
  for (const num of nums) {
    // Update the running prefix sum
    prefixSum += num;

    // Check if there exists a prefix sum such that:
    // current prefixSum - previous prefixSum = k
    // If yes, then we found a subarray that sums to k
    if (prefixSumMap.has(prefixSum - k)) {
      // Add the frequency of that prefix sum to the count
      count += prefixSumMap.get(prefixSum - k)!;
    }

    // Record the current prefix sum in the map
    // If it already exists, increment its frequency
    prefixSumMap.set(prefixSum, (prefixSumMap.get(prefixSum) || 0) + 1);
  }

  // Return the total count of subarrays with sum = k
  return count;
}
