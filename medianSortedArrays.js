var findMedianSortedArrays = function (nums1, nums2) {
  let arr = selectionSort(nums1.concat(nums2));
  let median = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) return (arr[median - 1] + arr[median]) / 2;
  return arr[median];
};

var selectionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let index = i - 1;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[index]) index = j;
    }
    [arr[i - 1], arr[index]] = [arr[index], arr[i - 1]];
  }
  return arr;
};

console.log(findMedianSortedArrays([1, 4, 2], [-1, 7, 3]));
console.log(findMedianSortedArrays([1, 10, 2, -100], [1]));
