import { romanToInteger } from "./index";

describe("[13] Roman To Integer", () => {
  test("case 1", () => {
    expect(romanToInteger("III")).toBe(3);
  });

  test("case 2", () => {
    expect(romanToInteger("LVIII")).toBe(58);
  });

  test("case 3", () => {
    expect(romanToInteger("MCMXCIV")).toBe(1994);
  });
});
