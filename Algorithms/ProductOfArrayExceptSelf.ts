function productExceptSelf(nums: number[]): number[] {
  // Initialize result array with all 1s (multiplicative identity).
  // We'll use this to store the prefix products first, then update with suffix products.
  let result: number[] = new Array(nums.length).fill(1);

  // Track the cumulative product from the left side.
  // For each index, result[i] will store product of all elements before i.
  let leftPointer: number = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftPointer; // Assign product of elements on the left of i
    leftPointer *= nums[i]!; // Update running product for next position
  }

  // Track the cumulative product from the right side.
  // Multiply it with the existing prefix product in result[i].
  let rightPointer: number = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i]! *= rightPointer; // Combine prefix (already stored) × suffix (from right)
    rightPointer *= nums[i]!; // Update running product for next position on the left
  }

  // At this point, result[i] holds the product of all elements except nums[i].
  return result;
}

// Example runs:
console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([1, 2, 0, 4])); // [0, 0, 8, 0]
console.log(productExceptSelf([0, 0, 3, 4])); // [0, 0, 0, 0]
