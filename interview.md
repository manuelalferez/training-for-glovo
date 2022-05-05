# Technical interview: Algorithmic problems

## First problem 
```ts
interface HashTable<T> {
  [key: string]: T;
}

function firstNonRepeatedCharacter(s: string): any {
  let hashTable: HashTable<number> = {};
  for (let i = 0; i < s.length; i++) {
    if (hashTable.hasOwnProperty(s.charAt(i))) {
      hashTable[s.charAt(i)] += 1;
    } else {
      hashTable[s.charAt(i)] = 1;
    }
  }
  for (const [key, value] of Object.entries(hashTable)) {
    if (value == 1) {
      return key;
    }
  }

  return null;
}

export default firstNonRepeatedCharacter;
```

## Second problem 
```ts
interface HashTable<T> {
  [key: string]: T;
}

function isAnagram(a: string, b: string): boolean {
  let firstHash: HashTable<number> = {};
  let secondHash: HashTable<number> = {};

  if (a.length != b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (firstHash.hasOwnProperty(a.charAt(i))) {
      firstHash[a.charAt(i)] += 1;
    } else {
      firstHash[a.charAt(i)] = 1;
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (secondHash.hasOwnProperty(b.charAt(i))) {
      secondHash[b.charAt(i)] += 1;
    } else {
      secondHash[b.charAt(i)] = 1;
    }
  }
  for (const [key, value] of Object.entries(firstHash)) {
    if (secondHash[key] != value || !secondHash.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

export default isAnagram;
```