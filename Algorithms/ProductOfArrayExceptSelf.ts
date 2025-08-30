function productExceptSelf(nums: number[]): number[] {
  let result: number[] = new Array().fill(1);

  let leftPointer: number = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftPointer;
    leftPointer *= nums[i]!;
  }
  let rightPointer: number = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i]! *= rightPointer;
    rightPointer *= nums[i]!;
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // EXPECTED: [24, 12, 8, 6]
console.log(productExceptSelf([1, 2, 0, 4])); // EXPECTED: [0, 0, 8, 0]
console.log(productExceptSelf([0, 0, 3, 4])); // EXPECTED: [0, 0, 0, 0]
