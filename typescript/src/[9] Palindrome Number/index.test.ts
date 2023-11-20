import { isPalindrome } from "./index";

describe("[9] Palindrome Number", () => {
  test("case 1", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test("case 2", () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  test("case 3", () => {
    expect(isPalindrome(10)).toBe(false);
  });
});
