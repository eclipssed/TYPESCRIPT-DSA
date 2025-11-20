function productExceptSelf(nums: number[]): number[] {
  const productArr: number[] = Array(nums.length).fill(0);

  let leftProduct: number = 1;
  for (let i = 0; i < nums.length; i++) {
    productArr[i] = leftProduct;
    leftProduct *= nums[i]!;
  }
  let rightProduct: number = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    productArr[i]! *= rightProduct;
    rightProduct *= nums[i]!;
  }
  return productArr;
}

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
