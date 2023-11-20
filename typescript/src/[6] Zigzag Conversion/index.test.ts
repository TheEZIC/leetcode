import { convert } from "./index";

describe("[1] Two sum", () => {
  const input = "PAYPALISHIRING";

  test("case 1", () => {
    expect(convert(input, 3)).toBe("PAHNAPLSIIGYIR");
  });

  test("case 2", () => {
    expect(convert(input, 4)).toBe("PINALSIGYAHRPI");
  });
});
