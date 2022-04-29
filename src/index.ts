// Solution: Complexity = 0(log(n+m)), Runtime: 108ms, Memory: 47.6 MB

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

export default findMedianSortedArrays;
