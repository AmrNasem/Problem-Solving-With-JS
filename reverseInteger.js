var reverse = function (x) {
  const nums = x.toString().split("");
  let reversed = [];
  let signed = false;
  for (let i = 0; i < nums.length; i++) {
    if (parseInt(nums[i]) || nums[i] === "0") reversed.unshift(nums[i]);
    else {
      signed = true;
      continue;
    }
  }
  signed ? (x = -reversed.join("")) : (x = +reversed.join(""));
  const limit = Math.pow(2, 31);
  if (x > limit || x < -(limit - 1)) {
    return 0;
  }
  return x;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
