/**
 * 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
 * @param {*} arr
 * @param {*} target
 */
// 使用filter查找
function findAllOccurrences(arr, target) {
  var res = [];
  arr.filter(function(ele, idx) {
    if (ele === target) {
        res.push(idx);
    }
  });

  return res;
}

function findAllOccurrencesFor(arr, target) {
  var res = [];
  arr.forEach(function(ele, idx) {
    if (ele === target) {
      res.push(idx);
    }
  });

  return res;
}

var arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c' ];
// var res = findAllOccurrences(arr, 'a');
var res = findAllOccurrencesFor(arr, 'a');
console.log(res);
