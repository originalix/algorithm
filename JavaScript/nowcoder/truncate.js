/**
 * 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
 * @param {*} arr
 */
function truncate(arr) {
  var res = arr.slice(0);
  res.pop();
  return res;
}

// slice方法
function truncateSlice(arr) {
  return arr.slice(0, -1);
}

// 常规迭代 pop方法
function truncateFor(arr) {
  var res = [];
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    if (i !== arr.length - 1) {
      res.push(arr[i]);
    }
  }

  return res;
}

// filter 方法
function truncateFilter(arr) {
  return arr.filter(function(ele, idx, arr) {
    return idx !== arr.length - 1;
  });
}

// concat方法
function truncateConcat(arr) {
  var res = arr.concat();
  res.pop();
  return res;
}

var arr = [1, 2, 3, 4];
// var res = truncateSlice(arr);
// var res = truncateFor(arr);
var res = truncateFilter(arr);
console.log(res);
