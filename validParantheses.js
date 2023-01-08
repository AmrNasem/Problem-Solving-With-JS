var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let last = stack[stack.length - 1];
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (
      (s[i] === ")" && last === "(") ||
      (s[i] === "}" && last === "{") ||
      (s[i] === "]" && last === "[")
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  if (!stack.length) {
    return true;
  }
  return false;
};

console.log("( : " + isValid("("));
console.log("] : " + isValid("]"));
console.log("(}[] : " + isValid("(}[]"));
console.log("()[{}] : " + isValid("()[{}]"));
console.log("[]()[] : " + isValid("[]()[]"));
console.log("()}[{] : " + isValid("()}[{]"));
