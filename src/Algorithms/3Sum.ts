
// -----------------------------
// 3Sum Problem Solution
// -----------------------------
// Goal: Find all unique triplets in the array that sum to zero.
// Approach:
// 1. Sort the array (ascending).
// 2. Iterate each element `i` and use two pointers (`left`, `right`)
//    to find pairs that form a zero-sum triplet with nums[i].
// 3. Skip duplicates to avoid repeating the same triplet.
// 4. Collect valid triplets into a result array.
function threeSum(nums: number[]): number[][] {
  // Step 1: Sort the array to enable two-pointer approach
  nums = nums.sort((a, b) => a - b);
  const result: number[][] = [];

  // Step 2: Iterate each number as the "base" of a potential triplet
  for (let i = 0; i < nums.length; i++) {
    // Skip duplicate bases to avoid repeating triplets
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let leftPointer = i + 1; // immediately after base
    let rightPointer = nums.length - 1; // end of array

    // Step 3: Use two-pointer search for the remaining two numbers
    while (leftPointer < rightPointer) {
      const sum = nums[i]! + nums[leftPointer]! + nums[rightPointer]!;

      if (sum === 0) {
        // Found a valid triplet → add to result
        result.push([nums[i]!, nums[leftPointer]!, nums[rightPointer]!]);

        // Skip duplicates for the left pointer
        while (
          leftPointer < rightPointer &&
          nums[leftPointer] === nums[leftPointer + 1]
        ) {
          leftPointer++;
        }

        // Skip duplicates for the right pointer
        while (
          leftPointer < rightPointer &&
          nums[rightPointer] === nums[rightPointer - 1]
        ) {
          rightPointer--;
        }

        // Move both pointers inward after recording a triplet
        leftPointer++;
        rightPointer--;
      } else if (sum > 0) {
        // Sum too large → move right pointer leftward
        rightPointer--;
      } else {
        // Sum too small → move left pointer rightward
        leftPointer++;
      }
    }
  }

  // Step 4: Return all collected unique triplets
  return result;
}
