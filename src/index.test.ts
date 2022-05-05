import firstUniqChar from ".";

test("first non-repeating character of 'leetcode' should be 0", () => {
  expect(firstUniqChar("leetcode")).toBe(0);
});

test("first non-repeating character of 'loveleetcode' should be 2", () => {
  expect(firstUniqChar("loveleetcode")).toBe(2);
});

test("first non-repeating character of 'aabb' should be -1", () => {
  expect(firstUniqChar("aabb")).toBe(-1);
});

test("first non-repeating character of 'z' should be 0", () => {
  expect(firstUniqChar("z")).toBe(0);
});
