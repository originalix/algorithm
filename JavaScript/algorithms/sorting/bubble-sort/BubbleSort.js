class BubbleSort {
  sort(originalArray) {
    // 是否发生交换的标记
    let swapped = false;
    // 克隆数组 不在原数组上操作
    const array = [...originalArray];

    for (let i = 0; i < array.length; i += 1) {
      swapped = false;

      for (let j = array.length - 2; j >= i; j -= 1) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;

          swapped = true;
        }
      }

      // 没有交换记录就直接返回数组
      if (!swapped) {
        return array;
      }
    }

    return array;
  }
}

let array = [1, 5, 2, 4, 3, 6];
let bubble = new BubbleSort();
let res = bubble.sort(array);
console.log(res);
