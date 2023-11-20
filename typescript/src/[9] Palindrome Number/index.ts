export function isPalindrome(x: number): boolean {
  const str = String(x);

  if (str.length === 1) {
    return true;
  }

  let mid = str.length / 2;

  for (let i = 0; i <= mid; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
