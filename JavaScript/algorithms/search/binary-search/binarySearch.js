class BinarySearch {
  constructor(originalArray) {
    this.array = originalArray;
  }
  search(low, high, target) {
    const middle = Math.floor((low + high) / 2);

    if (array[middle] === target) {
      return middle;
    }

    if (array[middle] > target) {
      high = middle;
    } else {
      low = middle;
    }

    // if (low === high) {
    //   return -1;
    // }

    return this.search(low, high, target);
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const binary = new BinarySearch(array);
const result = binary.search(0, array.length - 1, 0);
console.log(result);
