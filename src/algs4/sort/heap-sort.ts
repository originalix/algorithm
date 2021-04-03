/**
 * 堆排序
 */
export default class HeapSort<T> {
  sort(arr: T[]) {
    let N = arr.length
    for (let k = Math.floor(N / 2); k >= 1; k--) {
      this.sink(arr, k, N)
    }
    while (N > 1) {
      this.exch(arr, 1, N--)
      this.sink(arr, 1, N)
    }
  }

  private sink(arr: T[], dad: number, N: number) {
    while (2 * dad <= N) {
      let son = 2 * dad
      if (son < N && this.less(arr, son, son + 1)) son++
      if (!this.less(arr, dad, son)) break
      this.exch(arr, dad, son)
      dad = son
    }
  }

  private exch(arr: T[], i: number, j: number) {
    const temp = arr[i - 1]
    arr[i - 1] = arr[j - 1]
    arr[j - 1] = temp
  }

  private less(arr: T[], i: number, j: number) {
    return arr[i - 1] < arr[j - 1]
  }

  isSorted(arr: T[]): boolean {
    for (let i = 1; i < arr.length; i++) {
      if (this.less(arr, i, i - 1)) return false
    }
    return true
  }
}
