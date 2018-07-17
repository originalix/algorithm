/**
 * 计算给定数组 arr 中所有元素的总和
 * @param {*} arr
 */
function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumRecursion(arr) {
  var len = arr.length;
  if (len === 0) {
    return 0;
  } else if (len === 1) {
    return arr[0];
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}

function sumMapReduce(arr) {
  return arr.reduce(function(prev, curr, idx, arr) {
    return prev + curr;
  })
}

var arr = [1, 2, 3, 4];
// var sum = sum(arr);
// var sum = sumRecursion(arr);
var sum = sumMapReduce()
console.log(sum);
