var removeDuplicates = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let unique = nums[i - 1];
    const j = i;
    while (nums[j] === unique) {
      nums.splice(j, 1);
    }
    if (i + 1 === nums.length) nums.push(nums[i]);
  }
  return [`K = ${nums.length}, ` + nums];
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
