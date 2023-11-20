type Roman = "I" | "V" | "X" | "L" | "C" | "D" | "M";

const dict: Record<Roman, number> = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
};

export function romanToInteger(s: string) {
  let res: number = dict[s.charAt(s.length - 1)];

  for (let i = s.length - 1; i > 0; i--) {
    let cur = dict[s.charAt(i)];
    let next = dict[s.charAt(i - 1)];

    if (next >= cur) {
      res += next;
    } else {
      res -= next;
    }
  }

  return res;
}
