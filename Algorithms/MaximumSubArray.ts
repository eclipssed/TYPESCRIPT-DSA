
function maxSubArray(nums: number[]): number {
  // Edge case: if the input array is empty, return 0 (or handle differently depending on requirements)
  if (nums.length === 0) return 0;

  // Initialize variables:
  // currentSum → running sum for the subarray ending at index i
  // maxSum → best sum found so far
  // bestStart, bestEnd → indices of the subarray that produced maxSum
  // currentStart → potential start index of the current subarray
  let currentSum: number = nums[0]!;
  let maxSum: number = nums[0]!;
  let bestStart: number = 0;
  let bestEnd: number = 0;
  let currentStart: number = 0;

  // Traverse array from index 1 to the end
  for (let i = 1; i < nums.length; i++) {
    // Decide whether to extend the current subarray or start fresh at nums[i]
    if (nums[i]! > currentSum! + nums[i]!) {
      currentSum = nums[i]!; // start a new subarray
      currentStart = i; // reset start index
    } else {
      currentSum = currentSum! + nums[i]!; // extend current subarray
    }

    // If the new currentSum beats the global max, update max and track indices
    if (currentSum! > maxSum!) {
      maxSum = currentSum!;
      bestStart = currentStart;
      bestEnd = i;
    }
  }

  // Extract the actual subarray contributing to maxSum
  const subArrayWithMaxSum: number[] = [];
  for (let i = bestStart; i <= bestEnd; i++) {
    subArrayWithMaxSum.push(nums[i]!);
  }

  // Debugging/logging purposes:
  console.log("Max Subarray:", subArrayWithMaxSum);

  return maxSum!;
}

// ✅ Example test cases
console.log(maxSubArray([1, 2, 3, -2, 5])); // Expected: 9   → subarray [1, 2, 3, -2, 5]
console.log(maxSubArray([-1, -2, -3, -4])); // Expected: -1  → subarray [-1]
console.log(maxSubArray([4, -1, 2, 1])); // Expected: 6   → subarray [4, -1, 2, 1]
console.log(maxSubArray([-5, -4, -1, -7, -8])); // Expected: -1 → subarray [-1]
console.log(maxSubArray([5, 4, -1, 7, 8])); // Expected: 23  → subarray [5, 4, -1, 7, 8]
