export function twoSum(nums: number[], target: number): [number, number] {
  const table = {};

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];

    if (typeof table[cur] == "undefined") {
      table[target - cur] = i;
    } else {
      return [table[cur], i];
    }
  }

  return [0, 0];
}
