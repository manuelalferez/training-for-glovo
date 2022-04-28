import twoSum from ".";

test("input [2,7,11,15] and target 9 should return [0,1]", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
});

test("input [3,2,4] and target 6 should return [0,1]", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual(expect.arrayContaining([1, 2]));
});

test("input [11,7,2,15] and target 9 should return [1,2]", () => {
  expect(twoSum([11, 7, 2, 15], 9)).toEqual(expect.arrayContaining([1, 2]));
});

test("input [0,4,3,0] and target 0 should return [0,3]", () => {
  expect(twoSum([0, 4, 3, 0], 0)).toEqual(expect.arrayContaining([0, 3]));
});

test("input [-3,4,3,90] and target 0 should return [0,2]", () => {
  expect(twoSum([-3, 4, 3, 90], 0)).toEqual(expect.arrayContaining([0, 2]));
});
