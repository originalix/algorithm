class InsertionSort {
  sort(originalArray) {
    let array = [...originalArray];

    for (let i = 1; i < array.length; i++) {
      let temp = array[i];

      for (let j = i - 1; j >= 0 && temp < array[j]; j--) {
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }

    return array;
  }
}

let array = [6, 1, 2, 4, 5, 6, 8, 9, 3, 0];
let insertion = new InsertionSort();
let res = insertion.sort(array);
console.log(res);
