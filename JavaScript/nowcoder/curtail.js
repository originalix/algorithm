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

function curtailFor(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (i !== 0) {
      res.push(arr[i]);
    }
  }

  return res;
}

var arr = [1, 2, 3, 4];
// var res = curtail(arr);
var res = curtailFor(arr);
console.log(res);
