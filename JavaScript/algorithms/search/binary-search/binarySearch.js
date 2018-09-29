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
// const result = binary.search(0, array.length - 1, 0);
// console.log(result);

Array.prototype.binary_search = function(low, high, target) {
  if (low > high) {
    console.log(`low = ${low}, high = ${high}`);
    return -1;
  }

  const middle = parseInt((low + high) / 2);
  if (this[middle] > target) {
    return this.binary_search(low, middle - 1, target);
  }
  if (this[middle] < target) {
    return this.binary_search(middle + 1, high, target);
  }
  return middle;
}

const res = array.binary_search(0, array.length - 1, 0);
console.log(res);
