var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log([1, 2, 3, 4], 5);
console.log([12, 1, 9, 2, 0], 3);
