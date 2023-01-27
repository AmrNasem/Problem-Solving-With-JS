var mergeTwoLists = function (list1 = [], list2 = []) {
  let newArr = [];
  while (list1.length && list2.length) {
    if (list1[0] < list2[0]) {
      newArr.push(list1.shift());
    } else {
      newArr.push(list2.shift());
    }
  }
  newArr = newArr.concat(list1, list2);
  return newArr;
};
console.log(mergeTwoLists([1, 2, 3], [1, 3, 4]));
