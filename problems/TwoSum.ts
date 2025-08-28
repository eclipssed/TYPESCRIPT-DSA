function twoSum(nums: number[], target: number): number[] {
  // Create a HashMap (key = number, value = index)
  // This allows O(1) lookup time for previously seen numbers
  const map = new Map<number, number>();

  // Loop through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the partner number we need to reach the target
    const partner = target - nums[i]!;

    // Check if the partner already exists in the map
    if (map.has(partner)) {
      // If yes, return the stored index of the partner and current index
      return [map.get(partner)!, i];
    }

    // Otherwise, store the current number with its index
    map.set(nums[i]!, i);
  }

  // If no pair is found, return an empty array
  return [];
}
