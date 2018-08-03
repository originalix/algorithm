/**
 * 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
 *
 * @param {*} arr
 * @param {*} item
 * @returns
 */
// concat方法
function prepend(arr, item) {
  return [item].concat(arr);
}

// unshift slice方法
function prependUnshift(arr, item) {
  var res = arr.slice(0);
  res.unshift(item);

  return res;
}

// 使用push.apply方法
function prependApply(arr, item) {
  var newArr = [item];
  [].push.apply(newArr, arr);

  return newArr;
}

// 使用join split方法
function prependJoin(arr, item) {
  var newArr = arr.join().split(',');
  newArr.unshift(item);

  return newArr;
}

// 常规循环方法
function prependFor(arr, item) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(arr[i]);
  }
  res.unshift(item);

  return res;
}

var arr = [1, 2, 3, 4];
// var res = prepend(arr, 10);
// var res = prependUnshift(arr, 10);
// var res = prependApply(arr, 10);
// var res = prependJoin(arr, 10);
// var res = prependFor(arr, 10);
// console.log(res);

function containsNumber(str) {
  // return /\d/g.test(str);
  // return str.match(/\d/g);
}

var str = '1abcdeft1';
var res = containsNumber(str);
console.log(res);
