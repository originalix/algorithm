class SelectionSort {
  sort(originalArray) {
    const array = [...originalArray];

    for (let i = 0; i < array.length; i++) {
      let minIndex = i;

      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex != i) {
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }

    return array;
  }
}

let arr = [1, 6, 4, 5, 3, 9 , 0];
let selection = new SelectionSort();
let res = selection.sort(arr);
console.log(res);
