var isPalindrome = function (x) {
  let deque = [];
  let arr = x.toString().split("");
  for (let i in arr) {
    deque.push(arr[i]);
  }
  while (deque.length > 1) {
    if (deque.pop() !== deque.shift()) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-1));
console.log(isPalindrome(123));
console.log(isPalindrome("Green"));
console.log(isPalindrome("FooF"));
console.log(isPalindrome(12344321));
