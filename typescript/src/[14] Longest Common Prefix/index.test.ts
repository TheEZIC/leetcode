import { longestCommonPrefix } from "./index";

describe("[14] Longest Common Prefix", () => {
  test("case 1", () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
  });

  test("case 2", () => {
    expect(longestCommonPrefix(["dog","racecar","car"])).toBe("");
  });
});
