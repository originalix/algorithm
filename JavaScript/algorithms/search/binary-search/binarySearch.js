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
    } else if (this.array[middle] < target) {
      return this.search(middle + 1, high, target);
    } else {
      return middle;
    }
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const binary = new BinarySearch(array);
const result = binary.search(0, array.length - 1, 0);
console.log(result);
