
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
 * Function to reverse a singly linked list.
 * Example: 1 -> 2 -> 3 -> null  becomes  3 -> 2 -> 1 -> null
 *
 * @param head - The head node of the linked list
 * @returns The new head of the reversed linked list
 */


function reverseList(head: ListNode | null): ListNode | null {
  // Pointer to the previous node (initially null, since the new tail will point to null)
  let prev: ListNode | null = null;

  // Pointer to the current node we are processing
  let current = head;

  // Traverse the list until current becomes null
  while (current) {
    // Save reference to the next node before breaking the link
    let next = current.next;

    // Reverse the link: point current node's "next" to the previous node
    current.next = prev;

    // Move prev one step forward (to current)
    prev = current;

    // Move current one step forward (to next)
    current = next;
  }

  // At the end, prev will be pointing to the new head of the reversed list
  return prev;
}
