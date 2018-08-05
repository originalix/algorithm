/**
 *  选择排序算法
 *  最优时间复杂度 n^2
 *  平均时间复杂度 n^2
 *  最差时间复杂度 n^2
 *  占用内存 1
 *  是否稳定 否
 */
class SelectionSort {
  sort(originalArray) {
    // 克隆数组 不在原数组上修改
    const array = [...originalArray];

    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;

      // 在数组的剩余部分中 寻找最小部分
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }

      // 如果最小的数被查找到，那就与原来的minIndex做一次交换
      if (minIndex !== i) {
        const temp = array[i];
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
