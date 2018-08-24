/**
 *  快速排序算法
 *  最优时间复杂度 O(nlogn)
 *  平均时间复杂度 O(nlogn)
 *  最坏时间复杂度 O(n^2)
 *  是否稳定 否
 */
class QuickSort {
  sort(originalArray) {
    const array = [...originalArray];

    // 如果数组小于等于一个元素的时候就返回，可以理解为已经排好序
    if (array.length <= 1) {
      return array;
    }

    // 定义左右两个数组
    const leftArray = [];
    const rightArray = [];

    // 取出第一个元素作为比较对象
    const pivotElement = array.shift();
    const centerArray = [pivotElement];

    // 把数组切分为左中右三部分
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

    // 对左右两个数组递归排序
    const leftSortedArray = this.sort(leftArray);
    const rightSortedArray = this.sort(rightArray);

    // 将返回的已经排好序的左中右三个数组合并 完成排序
    return leftSortedArray.concat(centerArray, rightSortedArray);
  }
}

const array = [6, 10, 1, 9, 4, 8, 2, 7, 3, 5];
const quick = new QuickSort();
const res = quick.sort(array);
console.log(res);
