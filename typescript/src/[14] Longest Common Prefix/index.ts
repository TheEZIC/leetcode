export function longestCommonPrefix(strs: string[]): string {
  strs = strs.sort();

  let first = strs[0];
  let last = strs[strs.length - 1];

  for (let i = 0; i < Math.min(first.length, last.length); i++) {
    if (first.charAt(i) != last.charAt(i)) {
      return first.substring(0, i);
    }
  }

  return first;
};
