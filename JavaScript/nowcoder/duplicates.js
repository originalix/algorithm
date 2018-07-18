/**
 * 找出数组 arr 中重复出现过的元素
 * @param {*} arr
 */
function duplicates(arr) {
  // a数组存放 结果
  var a = [];
  // b数组存放arr中每个元素的个数
  var b = [];

  //遍历arr，如果以arr中元素为下标的的b元素已存在，则该b元素加1，否则设置为1
  for (var i = 0; i < arr.length; i++) {
    if (! b[arr[i]]) {
      b[arr[i]] = 1
      continue;
    }

    b[arr[i]] += 1;
  }

  // 遍历b数组，将其中元素值大于1的元素存入a数组中
  for (var i = 0; i < b.length; i++) {
    console.log('i: -> ' + i);
    console.log('b[' + i  + ']: -> ' + b[i]);
    if (b[i] > 1) {
      a.push(i);
    }
  }

  return a;
}

var arr = [1, 2, 4, 4, 3, 3, 1, 5, 3];
var res = duplicates(arr);
console.log(res);
