# Problems 
Here you can find the problems we will be solving. 

## Function that adds two numbers
Test problem proposed by the [Jest documentation](https://jestjs.io/docs/getting-started). 

### Solution 
```
    function sum(a: number, b: number): number {
    return a + b;
    }
    export default sum;
```
### Test 
```
    test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
    });    
```

## Two sum 
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
```
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

Example 2:

```
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
```

### Solution 
**First solution**: Complexity = `O(n^2)`, Runtime: `112ms`, Memory: `43.3 MB`
```
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] == target) return [i, j];
    }
  }
  return [];
}
```

**Second solution**: Complexity = `0(n)`, Runtime: `77ms`, Memory:` 44.8 MB` 

```
interface HashTable<T> {
  [key: string]: T;
}

function twoSum(nums: number[], target: number): number[] {
  let hashTable: HashTable<number> = {};
  for (let index = 0; index < nums.length; index++) {
    let complement = target - nums[index];
    if (hashTable[complement] !== undefined) {
      return [hashTable[complement], index];
    }
    hashTable[nums[index]] = index;
  }
  return [];
}

export default twoSum;
```

### Tests
```
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
```

## Median of Two Sorted Arrays
Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

Example 1:
```
    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.
```

Example 2:
```
    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

### Solution 
Complexity = `0(log(n+m))`, Runtime: `108ms`, Memory: `47.6 MB`
```
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let stack: number[] = [];
  let iteration = Math.round((nums1.length + nums2.length) / 2);
  let isOdd = (nums1.length + nums2.length) % 2 != 0 ? true : false;
  if ((nums1.length + nums2.length) % 2 == 0) iteration++;
  while (stack.length != iteration) {
    if (nums1.length != 0 && nums2.length != 0) {
      if (nums1[0] < nums2[0]) {
        stack.push(nums1[0]);
        nums1.shift();
      } else {
        stack.push(nums2[0]);
        nums2.shift();
      }
    } else {
      if (nums1.length != 0) {
        stack.push(nums1[0]);
        nums1.shift();
      } else {
        stack.push(nums2[0]);
        nums2.shift();
      }
    }
  }
  if (isOdd) {
    return stack.pop() as number;
  } else {
    return ((stack.pop() as number) + (stack.pop() as number)) / 2;
  }
}
```

### Tests 
```
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
```

## First Unique Character in a String
Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`.

Example 1:
```
Input: s = "leetcode"
Output: 0
```

### Solution 
**First solution**: Complexity = `0(n^2)`, Runtime: `219ms`, Memory: `48.9 MB`
```
function firstUniqChar(s: string): number {
  let charArray = s.split("");
  if (charArray.length == 1) return 0;
  for (let i = 0; i < charArray.length; i++) {
    let flag = false;
    for (let j = 0; j < charArray.length; j++) {
      if (i == j) continue;
      if (charArray[i] == charArray[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      return i;
    }
  }
  return -1;
}
```

**Second solution**: Complexity = `0(n)`, Runtime: `143ms`, Memory: `50.8 MB`
```
interface HashTable<T> {
  [key: string]: T;
}

function firstUniqChar(s: string): number {
  let hashTable: HashTable<number> = {};
  let charArray = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (hashTable[charArray[i]] == undefined) {
      hashTable[charArray[i]] = 1;
    } else {
      hashTable[charArray[i]] = hashTable[charArray[i]] + 1;
    }
  }

  for (const [key, value] of Object.entries(hashTable)) {
    if (value == 1) {
      return charArray.indexOf(key);
    }
  }
  return -1;
}
```

### Tests 
```
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
```