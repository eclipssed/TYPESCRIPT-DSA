// Definition for singly-linked list node
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Merges two sorted linked lists into one sorted linked list.
 * Both list1 and list2 are assumed to be sorted in non-decreasing order.
 */
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  
  // Step 1: Create a dummy node to simplify edge cases (like empty lists).
  // This acts as a placeholder head of the merged list.
  const dummy = new ListNode(-1);

  // Step 2: Use a pointer 'current' to build the new list starting from dummy.
  let current = dummy;

  // Step 3: Traverse both lists until one of them becomes null
  while (list1 !== null && list2 !== null) {
    // Compare current nodes of both lists
    if (list1.val < list2.val) {
      // Attach the smaller node to the merged list
      current.next = list1;
      // Move list1 pointer forward
      list1 = list1.next;
    } else {
      // Attach list2 node if it's smaller or equal
      current.next = list2;
      // Move list2 pointer forward
      list2 = list2.next;
    }
    // Move 'current' pointer forward in the merged list
    current = current.next;
  }

  // Step 4: At this point, at least one list is fully traversed.
  // Attach the remaining nodes from whichever list is not null.
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  // Step 5: Return the merged list.
  // Since dummy is just a placeholder, the actual head is dummy.next.
  return dummy.next;
}
