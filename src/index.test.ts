import findMedianSortedArrays from ".";

test("the median of [1,3] and [2] should be equal to 2.0", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0);
});

test("the median of [1,2] and [3,4] should be equal to 2.5", () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
});

test("the median of [2] and [] should be equal to 2", () => {
  expect(findMedianSortedArrays([2], [])).toBe(2);
});

test("the median of  and [-1,0,0,0,0,0,1] should be equal to 0.5", () => {
  expect(findMedianSortedArrays([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1])).toBe(
    0.0
  );
});

test("the median of [] and [2,3] should be equal to 2.5", () => {
  expect(findMedianSortedArrays([], [2, 3])).toBe(2.5);
});

test("the median of [1,2] and [1,1] should be equal to 1.0", () => {
  expect(findMedianSortedArrays([1, 2], [1, 1])).toBe(1.0);
});

test("the median of [1,3] and [2,7] should be equal to 2.5", () => {
  expect(findMedianSortedArrays([1, 3], [2, 7])).toBe(2.5);
});

test("the median of [2,2,4,4] and [2,2,4,4] should be equal to 3.0", () => {
  expect(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 4, 4])).toBe(3.0);
});

test("the median of [1] and [2,3] should be equal to 2", () => {
  expect(findMedianSortedArrays([1], [2, 3])).toBe(2);
});

test("the median of [3] and [-2,-1] should be equal to -1.0", () => {
  expect(findMedianSortedArrays([3], [-2, -1])).toBe(-1.0);
});

test("the median of [2,3] and [1] should be equal to 2", () => {
  expect(findMedianSortedArrays([2, 3], [1])).toBe(2);
});

test("the median of [2] and [1,3] should be equal to 2", () => {
  expect(findMedianSortedArrays([2], [1, 3])).toBe(2);
});
