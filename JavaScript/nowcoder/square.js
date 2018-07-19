/**
 * 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
 * @param {*} arr
 */
// map 方法
function square(arr) {
  return arr.map(function(curr) {
    return curr * curr;
  });
}

// for循环方法
function squareFor(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(arr[i] * arr[i]);
  }

  return res;
}

var arr = [1, 2, 3, 4];
// var res = square(arr);
var res = squareFor(arr);
console.log(res);
