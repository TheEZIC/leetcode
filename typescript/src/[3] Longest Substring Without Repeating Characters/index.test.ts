import { lengthOfLongestSubstring } from "./index";

describe("[3 Longest Substring Without Repeating Characters]", () => {
  test("case 1", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  test("case 2", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  test("case 3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });
});
