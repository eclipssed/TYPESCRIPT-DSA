// -----------------------------
// QuickSort Implementation
// -----------------------------
// QuickSort is a divide-and-conquer algorithm that sorts an array by:
// 1. Picking a pivot (here, the first element).
// 2. Splitting the array into two halves:
//    - Left: elements smaller than pivot
//    - Right: elements greater or equal to pivot
// 3. Recursively sorting both halves and merging results.
function quickSort(nums: number[]): number[] {
  // Base case: an array of size 0 or 1 is already sorted
  if (nums.length <= 1) return nums;

  const pivot: number = nums[0]!;
  const left: number[] = [];
  const right: number[] = [];

  // Partition step: put smaller values in left, larger in right
  for (let i = 1; i < nums.length; i++) {
    if (nums[i]! < pivot) {
      left.push(nums[i]!);
    } else {
      right.push(nums[i]!);
    }
  }

  // Recursively sort both halves and combine with pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}
