/**
 * 统计数组 arr 中值等于 item 的元素出现的次数
 * @param {*} arr
 * @param {*} item
 */
// 常规循环迭代
function count(arr, item) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      sum += 1;
    }
  }

  return sum;
}

// 利用filter获取
function countFilter(arr, item) {
  return arr.filter(function(ele, idx, arr) {
    return ele === item;
  }).length;
}

// 利用map函数
function countMap(arr, item) {
  var sum = 0;
  arr.map(function (ele, idx, arr) {
    if (ele === item) {
      sum += 1;
    }
  });

  return sum;
}

// 利用正则表达式 统计出现次数
function countRegExp(arr, item) {
  var reg = new RegExp('' + item + '', 'g');
  var arrStr = arr.join("");
  var arrNum = arrStr.match(reg);

  return arrNum.length;
}

var arr = [1, 2, 4, 4, 3, 4, 3];
// var res = count(arr, 4);
// var res = countFilter(arr, 4);
// var res = countMap(arr, 4);
var res = countRegExp(arr, 4);
console.log(res);
