/**
 * 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
 * @param {*} arr
 * @param {*} item
 */
function indexOf(arr, item) {
  if (Array.prototype.indexOf) {
    return arr.indexOf(item);
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4];
let item = indexOf(arr, 3);
console.log(item);
