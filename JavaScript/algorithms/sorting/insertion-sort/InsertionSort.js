/**
 * 插入排序算法
 * 最优时间复杂度 O(n)
 * 平均时间复杂度 O(n^2)
 * 最坏时间复杂度 O(n^2)
 * 占用内存
 * 是否稳定 是
 */
class InsertionSort {
  sort(originalArray) {
    let array = [...originalArray];

    // 从第一个元素开始， 这个元素可以认为已经被排序
    for (let i = 1; i < array.length; i++) {

      // 取出下一个元素
      let temp = array[i];

      // 从已经排序的元素序列中 从后向前扫描
      // 如果这个元素大于新元素 则交换位置，将该元素移到下一位置
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
