import { addTwoNumbers } from "./index";
import { ListNode } from "@src/utils";

describe("[2] Add Two Numbers", () => {
  test("case 1", () => {
    const node1 = ListNode.fromArray([2, 4, 3]);
    const node2 = ListNode.fromArray([5, 6, 4]);

    const sum = addTwoNumbers(node1, node2);

    expect(ListNode.toArray(sum)).toEqual([7,0,8]);
  });

  test("case 2", () => {
    const node1 = ListNode.fromArray([0]);
    const node2 = ListNode.fromArray([0]);

    const sum = addTwoNumbers(node1, node2);

    expect(ListNode.toArray(sum)).toEqual([0]);
  });

  test("case 3", () => {
    const node1 = ListNode.fromArray([9, 9, 9, 9, 9, 9, 9]);
    const node2 = ListNode.fromArray([9, 9, 9, 9]);

    const sum = addTwoNumbers(node1, node2);

    expect(ListNode.toArray(sum)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
