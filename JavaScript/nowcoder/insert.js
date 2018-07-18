/**
 * 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
 *
 * @param {*} arr
 * @param {*} item
 * @param {*} index
 */
// 使用splice方法！ 注： splice方法返回的是删除掉的元素数组
function insert(arr, item, index) {
  var res = arr.slice(0);
  res.splice(index, 0, item);
  return res;
}

// 使用slice + concat方法
function insertConcat(arr, item, index) {
  return arr.slice(0, index).concat(item, arr.slice(index));
}

// 使用splice + concat方法
function insertSplice(arr, item, index) {
  var res = arr.concat();
  res.splice(index, 0, item);
  return res;
}

var arr = [1, 2, 3, 4];
// var res = insert(arr, 'z', 2);
var res = insertConcat(arr, 'z', 2);
console.log(res);
