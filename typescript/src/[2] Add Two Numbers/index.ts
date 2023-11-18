import { ListNode } from "@src/utils";

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let node1 = l1;
  let node2 = l2;

  let sum: number;
  let carry: number = 0;

  let head: ListNode;
  let tail: ListNode;

  while (node1 || node2) {
    sum = carry;

    sum += node1 ? node1.val : 0;
    node1 = node1 ? node1.next : node1;

    sum += node2 ? node2.val : 0;
    node2 = node2 ? node2.next : node2;

    carry = Math.floor(sum / 10);
    sum %= 10;

    const node = new ListNode(sum);

    if (!head) {
      head = node;
      tail = head;
    } else {
      tail.next = node;
      tail = tail.next;
    }
  }

  if (carry > 0) {
    tail.next = new ListNode(carry);
  }

  return head;
}
