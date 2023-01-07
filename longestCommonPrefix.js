var longestCommonPrefix = function (strs) {
  let [common, index] = ["", 0];

  for (let i = 1; i < strs.length; i++)
    if (strs[i].length < strs[i - 1].length) index = i;

  common = strs[index];
  for (let i = 0; i < strs.length; i++) {
    for (let j = common.length - 1; j >= 0; j--) {
      if (common[j] !== strs[i][j]) {
        common = common.slice(0, j);
      }
    }
  }
  return common;
};

console.log(
  "Longest Common Prefix: " + longestCommonPrefix(["flower", "flow", "flight"])
);
console.log(
  "Longest Common Prefix: " + longestCommonPrefix(["dog", "recer", "car"])
);
