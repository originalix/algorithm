/**
 * 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
 *
 * @param {*} arr
 */
// 使用函数式 filter函数
function curtail(arr) {

  return arr.filter(function(ele, idx, arr) {

    return idx !== 0;
  });
}

// 常规迭代式
function curtailFor(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (i !== 0) {
      res.push(arr[i]);
    }
  }

  return res;
}

// slice方法
function curtailSlice(arr) {
  return arr.slice(1);
}

// 使用shift删除元素
function curtailShift(arr) {
  var res = arr.slice(0);
  res.shift();
  return res;
}

function curtail(arr) {

}

var arr = [1, 2, 3, 4];
// var res = curtail(arr);
// var res = curtailFor(arr);
var res = curtailSlice(arr);
// var res = curtailShift(arr);
console.log(res);
