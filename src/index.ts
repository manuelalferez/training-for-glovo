// First solution: Complexity = O(n^2), Runtime: 112ms, Memory: 43.3 MB

// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] + nums[i] == target) return [i, j];
//     }
//   }
//   return [];
// }

// Second solution: Complexity = 0(n), Runtime: 77ms, Memory: 44.8 MB
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
