class HeapSort {
  constructor(originalArray) {
    this.array = [...originalArray];
  }

  swap(i, j) {
    const temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }

  maxHeapify(start, end) {
    let dad = start;
    let son = dad * 2 + 1;

    if (son >= end)
      return;
    if (son + 1 < end && this.array[son] < this.array[son + 1])
      son++;
    if (this.array[dad] < this.array[son]) {
      this.swap(dad, son);
      this.maxHeapify(son, end);
    }
  }

  sort() {
    const len = this.array.length;
    for (let i = Math.floor((len - 1) / 2); i >= 0; i--)
      this.maxHeapify(i, len);
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
