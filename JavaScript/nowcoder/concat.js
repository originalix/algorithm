/**
 * 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
// 使用concat方法
function concat(arr1, arr2) {
  return arr1.concat(arr2);
}

// 使用slice + push
function concatSlice(arr1, arr2) {
  var res = arr1.slice(0);
  for (var i = 0; i < arr2.length; i++) {
    res.push(arr2[i]);
  }

  return res;
}

// 利用slice + push.apply
function concatApply(arr1, arr2) {
  var res = arr1.slice(0);
  [].push.apply(res, arr2);
  return res;
}

// 常规迭代
function concatFor(arr1, arr2) {
  var res = [];
  for (var i = 0; i < arr1.length; i++) {
    res.push(arr1[i]);
  }

  for (var i = 0; i < arr2.length; i++) {
    res.push(arr2[i]);
  }

  return res;
}

var arr1 = [1, 2, 3, 4];
var arr2 = ['a', 'b', 'c', 1];
// var res = concat(arr1, arr2);
var res = concatSlice(arr1, arr2);
console.log(res);

var months = ['Jan', 'March', 'April', 'June'];
months.splice(months.length, 0, ['feb', 'abc']);
console.log(months);