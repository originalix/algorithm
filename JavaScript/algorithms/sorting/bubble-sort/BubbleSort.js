class BubbleSort {
  sort(originalArray) {
    // 是否交换位置的标记
    let swapped = false;
    // 克隆原始数组 为了不修改原始数组
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

      // 如果没有交换行为发生 那么直接返回
      if (!swapped) {
        return array;
      }
    }

    return array;
  }
}

let array = [6, 1, 2, 4, 3, 0];
let bubble = new BubbleSort();
let res = bubble.sort(array);
console.log(res);
