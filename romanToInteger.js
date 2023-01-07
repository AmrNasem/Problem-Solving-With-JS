var romanToInt = function (s) {
  let nums = convert(s);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      nums[i] = nums[i] - nums[i - 1];
      nums[i - 1] = 0;
    }
  }
  return nums.reduce((counter, current) => counter + current);
};

let convert = function (word) {
  let nums = [];
  for (let i = 0; i < word.length; i++) {
    switch (word[i]) {
      case "I":
        nums.push(1);
        break;
      case "V":
        nums.push(5);
        break;
      case "X":
        nums.push(10);
        break;
      case "L":
        nums.push(50);
        break;
      case "C":
        nums.push(100);
        break;
      case "D":
        nums.push(500);
        break;
      case "M":
        nums.push(1000);
        break;
    }
  }
  return nums;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
