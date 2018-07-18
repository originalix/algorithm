/**
 * 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
 * @param {*} arr
 * @param {*} item
 */
// push入新数组方法
function remove(arr, item) {
  var result = [];
  arr.forEach(function(curr, idx, arr) {
    if (curr !== item) {
      result.push(curr);
    }
  });
  return result;
}

// slice方法 记得i--
function removeSlice(arr, item) {
  var result = arr.slice(0);
  for (var i = 0; i < result.length; i++) {
    if (result[i] === item) {
      result.splice(i, 1);
      i--;
    }
  }

  return result;
}

// 函数式编程 filter方法
function removeFilter(arr, item) {
  return arr.filter(function(ele, idx, arr) {
    return ele !== item;
  });
}

var arr = [1, 2, 3, 4, 2];
// var res = remove(arr, 2);
// var res = removeSlice(arr, 2);
var res = removeFilter(arr, 2);
console.log(res);
