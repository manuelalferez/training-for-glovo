// First solution: Complexity = O(n^2), Runtime: 219 ms, Memory: 48.8 MB
// function firstUniqChar(s: string): number {
//   let charArray = s.split("");
//   if (charArray.length == 1) return 0;
//   for (let i = 0; i < charArray.length; i++) {
//     let flag = false;
//     for (let j = 0; j < charArray.length; j++) {
//       if (i == j) continue;
//       if (charArray[i] == charArray[j]) {
//         flag = true;
//         break;
//       }
//     }
//     if (!flag) {
//       return i;
//     }
//   }
//   return -1;
// }

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

export default firstUniqChar;
