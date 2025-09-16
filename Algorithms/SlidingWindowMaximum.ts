function maxSlidingWindow(nums: number[], k: number): number[] {
  // Deque will store indices of elements in decreasing order of their values.
  // The "head" pointer is a logical front of the deque to avoid costly shift operations.
  const deque: number[] = [];
  const result: number[] = [];
  let head: number = 0;

  for (let i = 0; i < nums.length; i++) {
    // 1. Remove indices that are outside the current window
    // (window covers indices [i - k + 1, i])
    if (deque.length > head && deque[head]! <= i - k) {
      head++; // logically discard the front element
    }

    // 2. Maintain decreasing order in deque
    // Remove all indices from the back whose values are smaller than nums[i]
    while (deque.length > head && nums[deque[deque.length - 1]!]! < nums[i]!) {
      deque.pop();
    }

    // 3. Push current index into deque
    deque.push(i);

    // 4. Once the first window is formed (i >= k - 1),
    // record the max value (front of deque always holds the max index)
    if (i >= k - 1) {
      result.push(nums[deque[head]!]!);
    }
  }

  return result;
}
