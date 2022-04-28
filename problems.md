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
    export default twoSum;
```

**Second solution**: Complexity = `0(n)`, Runtime: `77ms`, Memory:` 44.8 MB` 

```
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