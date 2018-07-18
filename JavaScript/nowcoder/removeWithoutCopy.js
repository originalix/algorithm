/**
 * 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
 * @param {*} arr
 * @param {*} item
 */
function removeWithoutCopy(arr, item) {
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

var arr = [1, 2, 2, 3, 4, 2, 2];
var res = removeWithoutCopy(arr, 2);
console.log(res);
