export function lengthOfLongestSubstring(str: string): number {
  let existedChars: string[] = [];
  let result = 0;

  for (let char of str) {
    if (existedChars.includes(char)) {
      const repeatedIndex = existedChars.indexOf(char);
      result = Math.max(result, existedChars.length);
      existedChars = existedChars.splice(repeatedIndex + 1);
    }

    existedChars.push(char);
  }

  result = Math.max(result, existedChars.length);

  return result;
}
