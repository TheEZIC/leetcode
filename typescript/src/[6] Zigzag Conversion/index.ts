export function convert(s: string, numRows: number): string {
  if (s.length <= 1 || numRows <= 1) {
    return s;
  }

  let result = "";
  const between = numRows * 2 - 2;

  for (let i = 0; i < numRows; i++) {
    for (let j = i; j < s.length; j += between) {
      result += s.charAt(j);
      const at = j + between - 2 * i;

      if (i != 0 && i != numRows - 1 && at < s.length) {
        result += s.charAt(at);
      }
    }
  }

  return result;
}
