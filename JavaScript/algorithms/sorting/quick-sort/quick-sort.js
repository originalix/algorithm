class QuickSort1 {
  sort(originalArray) {
    const array = [...originalArray];

    if (array.length <= 1) {
      return array;
    }

    const leftArray = [];
    const rightArray = [];

    const pivotElement = array.shift();
    const centerArray = [pivotElement];

    while (array.length) {
      const currentElement = array.shift();
      if (currentElement === pivotElement) {
        centerArray.push(currentElement);
      } else if (currentElement < pivotElement) {
        leftArray.push(currentElement);
      } else {
        rightArray.push(currentElement);
      }
    }

    const leftSortedArray = this.sort(leftArray);
    const rightSortedArray = this.sort(rightArray);

    return leftSortedArray.concat(centerArray, rightSortedArray);
  }
}

const array = [6, 10, 1, 9, 4, 8, 2, 7, 3, 5];
const quick = new QuickSort1();
const res = quick.sort(array);
console.log(res);
