import { StdIn, StopWatch } from 'utils'
import { SortMockFile, __DEBUG__ } from '@/constants'
const assert = require('assert')
/**
 * 堆排序
 */
class HeapSort<T> {
  sort(arr: T[]) {
    let N = arr.length
    for (let k = Math.floor(N / 2); k >= 1; k--) {
      this.sink(arr, k, N)
    }
    while (N > 1) {
      this.exch(arr, 1, N--)
      this.sink(arr, 1, N)
    }
    assert(this.isSorted(arr), '数组排序错误')
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

  protected isSorted(arr: T[]): boolean {
    for (let i = 1; i < arr.length; i++) {
      if (this.less(arr, i, i - 1)) return false
    }
    console.log(arr)
    return true
  }
}

async function main() {
  const data = await StdIn.readInt(SortMockFile)
  const stopWatch = new StopWatch()
  const heapSort = new HeapSort()
  heapSort.sort(data)
  stopWatch.elapseTime()
}

__DEBUG__ && main()
