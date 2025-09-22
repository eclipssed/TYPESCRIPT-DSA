function threeSumClosest(nums: number[], target: number): number {
  // Step 1: Sort the array
  // Sorting helps us use the two-pointer technique efficiently
  // because we can then decide which direction to move based on the sum.
  nums = nums.sort((a, b) => a - b);

  // Step 2: Initialize "closestSum" with the first three numbers
  // This gives us a valid starting sum to compare against.
  // Using Infinity would also work, but this makes the math cleaner.
  let closestSum: number = nums[0]! + nums[1]! + nums[2]!;

  // Step 3: Iterate through each number as the "anchor"
  // We'll fix nums[i] and then use two pointers to find the other two numbers.
  for (let i = 0; i < nums.length - 2; i++) {
    // Left pointer starts just after i, right pointer starts at the end
    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;

    // Step 4: Two-pointer search
    // Keep moving pointers toward each other to explore sums
    while (leftPointer < rightPointer) {
      // Current sum using the fixed anchor, left, and right
      const sum = nums[i]! + nums[leftPointer]! + nums[rightPointer]!;

      // Step 5: Update closestSum if this sum is closer to target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      // Step 6: Decide how to move pointers
      // - If sum < target, we need a bigger sum → move left pointer right
      // - If sum > target, we need a smaller sum → move right pointer left
      // - If sum === target, we've hit the jackpot → return immediately
      if (sum < target) {
        leftPointer++;
      } else if (sum > target) {
        rightPointer--;
      } else {
        return sum; // exact match found
      }
    }
  }

  // Step 7: Return the best sum found
  return closestSum;
}
