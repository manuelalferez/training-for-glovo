function firstUniqChar(s: string): number {
  let hashTable = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    if (hashTable.has(s.charAt(i))) {
      hashTable.set(s.charAt(i), (hashTable.get(s.charAt(i)) as number) + 1);
    } else {
      hashTable.set(s.charAt(i), 1);
    }
  }

  for (let [key, value] of hashTable) {
    if (value == 1) {
      return s.indexOf(key);
    }
  }
  return -1;
}

export default firstUniqChar;
