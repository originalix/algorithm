/**
 * 二分搜索法
 * 对有序数组进行搜索
 * 时间复杂度 O(log(n))
 */
class BinarySearch {
  constructor(originalArray) {
    this.array = originalArray;
  }
  search(low, high, target) {
    if (low > high) {
      return -1;
    }

    const middle = parseInt((low + high) / 2);
    if (this.array[middle] > target) {
      return this.search(low, middle - 1, target);
    }
    if (this.array[middle] < target) {
      return this.search(middle + 1, high, target);
    }
    return middle;
  }
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const binary = new BinarySearch(array);
// const result = binary.search(0, array.length - 1, 8);
// console.log(result);

Array.prototype.binarySearch = function(low, high, target) {
  if (low > high)
    return -1;

  const middle = parseInt((low + high) / 2);
  if (this[middle] > target)
    return this.binarySearch(low, middle - 1, target);
  if (this[middle] < target)
    return this.binarySearch(middle + 1, high, target);
  return middle;
}

const result = array.binarySearch(0, array.length - 1, 5);
console.log(result);
