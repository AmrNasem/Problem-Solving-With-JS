var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < m; i++) {
    if (nums1[i] > nums2[0]) {
      nums1.splice(i, 0, nums2.shift());
      m++;
    }
  }
  nums1.splice(m, n, ...nums2);
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
