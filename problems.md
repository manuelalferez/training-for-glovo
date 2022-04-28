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
