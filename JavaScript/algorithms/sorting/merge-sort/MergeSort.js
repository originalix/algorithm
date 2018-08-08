/**
 *  归并排序算法
 *  最坏时间复杂度 O(nlogn)
 *  最优时间复杂度 O(nlogn)
 *  平均时间复杂度 O(nlogn)
 *  空间复杂度 O(n)
 *  是否稳定 Yes
 */
class MergeSort {
  sort(array) {
    // 如果数组是空的，或者数组中只有一个元素，那么就返回这个数组
    // 因为可以认为它已经被排序了
    if (array.length <= 1) {
      return array;
    }

    // 计算出中间点，并把数组分隔成两部分
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // 递归调用sort函数，不断切分数组
    // 最后再把所有数组合并到一个数组中去
    return this.mergeSort(this.sort(left), this.sort(right));
  }

  mergeSort(left, right) {
    let result = [];

    // 当左右两个数组中都有元素时
    while(left.length && right.length) {
      // 找到两个已经排好序的数组中，最小的元素 并存入新数组中
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    // 当其中一个数组中还有元素时，直接并入新数组
    while(left.length) {
      result.push(left.shift());
    }

    while(right.length) {
      result.push(right.shift());
    }

    return result;
  }
}

const array = [6, 10, 1, 9, 4, 8, 2, 7, 3, 5];
let merge = new MergeSort();
let res = merge.sort(array);
console.log(res);
