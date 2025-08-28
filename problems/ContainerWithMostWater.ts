function maxArea(height: number[]): number {
  // Initialize two pointers:
  // leftPointer starts at the beginning (index 0)
  // rightPointer starts at the end (last index)
  let leftPointer: number = 0;
  let rightPointer: number = height.length - 1;

  // Variable to keep track of the maximum area found so far
  let maxArea: number = 0;

  // Continue looping until the two pointers meet
  while (leftPointer < rightPointer) {
    // Width is the distance between the two pointers
    let width: number = rightPointer - leftPointer;

    // The height of the container is determined by the shorter line
    let minHeight: number = Math.min(height[leftPointer]!, height[rightPointer]!);

    // Area of the current container
    let area: number = width * minHeight;

    // Update maxArea if the current area is larger
    if (area > maxArea) {
      maxArea = area;
    }

    // Move the pointer pointing to the shorter line:
    // Because moving the taller line inward won't help increase the area
    if (height[leftPointer]! < height[rightPointer]!) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  // Return the largest area found
  return maxArea;
}
