/**
 * 计算给定数组 arr 中所有元素的总和
 * @param {*} arr
 */
// 常规循环完成
function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 递归完成
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

// 函数式编程 map-reduce
function sumMapReduce(arr) {
  return arr.reduce(function(prev, curr, idx, arr) {
    return prev + curr;
  });
}

// forEach遍历
function sumForEach(arr) {
  var sum = 0;
  arr.forEach(function(curr, idx, arr) {
    sum += curr;
  }, 0);
  return sum;
}

// eval完成
function sumEval(arr) {
  return eval(arr.join('+'));
}

var arr = [1, 2, 3, 4];
// var sum = sum(arr);
// var sum = sumRecursion(arr);
// var sum = sumMapReduce(arr);
// var sum = sumForEach(arr);
var sum = sumEval(arr);
console.log(sum);
