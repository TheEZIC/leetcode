export class ListNode<T = any> {
  public val: T;
  public next: ListNode<T> | null;

  constructor(val: T, next?: ListNode<T> | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }

  public static fromArray<T>(array: T[]): ListNode {
    if (!array.length) {
      throw new Error("Empty array provided");
    }

    let head = new ListNode(array[0]);
    let tail = head;

    for (let i = 1; i < array.length; i++) {
      tail.next = new ListNode<T>(array[i]);
      tail = tail.next;
    }

    return head;
  }

  public static toArray<T>(head: ListNode<T>): T[] {
    if (head.val === undefined && !head.next) {
      throw new Error("Empty node provided");
    }

    const array: T[] = [];

    while (head.next) {
      array.push(head.val);
      head = head.next;
    }

    if (head) {
      array.push(head.val);
    }

    return array;
  }
}
