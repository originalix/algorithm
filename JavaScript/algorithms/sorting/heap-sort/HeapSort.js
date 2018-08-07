/**
 *  堆排序算法
 *  最优时间复杂度 O(nlog n)
 *  最坏时间复杂度 O(nlog n)
 *  平均时间复杂度 O(nlog n)
 *  占用空间 1
 *  是否稳定 No
 *
 *  堆排序 利用堆这种数据结构所实际的一种排序算法
 *  堆节点的访问
 *  通常堆是通过一维数组来实现的。在数组起始位置为0的情形中：
 *  父节点i的左子节点在位置(2i + 1);
 *  父节点i的右子节点在位置(2i + 2);
 *  子节点i的父节点在位置 floor((i-1)/2);
 */
class HeapSort {
  constructor(originalArray) {
    // 拷贝数组，不修改原数组
    this.array = [...originalArray];
  }

  swap(i, j) {
    const temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }

  maxHeapify(start, end) {
    // 建立父节点指标和子节点指标
    let dad = start;
    let son = dad * 2 + 1;

    // 若子节点指标超过范围，则直接跳出函数
    if (son >= end)
      return;
    // 先比较两个子节点的大小 选择最大的
    if (son + 1 < end && this.array[son] < this.array[son + 1])
      son++;
    // 如果父节点小于子节点，交换父子节点的内容再继续子节点与孙节点的比较
    if (this.array[dad] < this.array[son]) {
      this.swap(dad, son);
      this.maxHeapify(son, end);
    }
  }

  sort() {
    const len = this.array.length;
    // 初始化 i从最后一个父节点开始调整
    for (let i = Math.floor((len - 1) / 2); i >= 0; i--)
      this.maxHeapify(i, len);
    // 先将第一个元素和已排好的前一位做交换，再重新调整，直到排序完成
    for (let i = len - 1; i > 0; i--) {
      this.swap(0, i);
      this.maxHeapify(0, i);
    }

    return this.array;
  }
}

const array = [0, 9, 1, 8, 2, 7, 3, 6, 5, 4];
let heap = new HeapSort(array);
let res = heap.sort();
console.log(res);
