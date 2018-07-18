/**
 * 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
 * @param {*} arr
 * @param {*} item
 */
// 使用slice浅拷贝+push组合
function append(arr, item) {
  var res = arr.slice(0);
  res.push(item);

  return res;
}

// 普通的迭代拷贝
function appendPush(arr, item) {
  var res = [];
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    res.push(arr[i]);
  }
  res.push(item);

  return res;
}

// 使用concat将数组合并
function appendConcat(arr, item) {
  return arr.concat(item);
}

var arr = [1, 2, 3, 4];
// var res = append(arr, 10);
// var res = appendPush(arr, 10);
var res = appendConcat(arr, 10);
console.log(res);
