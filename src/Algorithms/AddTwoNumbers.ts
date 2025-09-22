// Definition for singly-linked list node
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // Dummy head node to simplify handling of the result list
  // (so we don’t have to check for null when inserting new nodes)
  let dummyHead = new ListNode(0);
  let current = dummyHead; // Pointer to build the result list
  let carry: number = 0;   // Stores carry from previous addition

  // Traverse both lists until both are null
  while (l1 !== null || l2 !== null) {
    // If one list is shorter, use 0 for missing values
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;

    // Calculate sum of current digits + carry
    let sum = x + y + carry;

    // Update carry for next iteration
    carry = Math.floor(sum / 10);

    // Create a new node with the digit value (sum % 10)
    current.next = new ListNode(sum % 10);

    // Move current pointer forward
    current = current.next;

    // Advance l1 and l2 if they are not null
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // If carry remains after loop ends, add an extra node
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  // Return the next of dummy head (actual result list head)
  return dummyHead.next;
}
