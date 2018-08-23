class QuickSort1 {
  sort(originalArray) {
    const array = [...originalArray];

    if (array.length <= 1) {
      return array;
    }

    const pivotElement = array.shift();
    const centerArray = [pivotElement];
    const leftArray = [];
    const rightArray = [];

    while(array.length) {
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

const array = [1, 9, 2, 8, 3, 7, 4, 6, 5];
const quick = new QuickSort1();
const res = quick.sort(array);
console.log(res);
