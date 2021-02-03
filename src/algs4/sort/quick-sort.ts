import BaseSort from './base-sort'
import { StdIn, StopWatch } from 'utils'
import { SortMockFile } from '@/constants'

class QuickSort<T> extends BaseSort<T> {
  sort(arr: T[]) {
    this._sort(arr, 0, arr.length - 1)
  }

  private _sort(arr: T[], lo: number, hi: number) {
    if (hi <= lo) return
    const j = this.partition(arr, lo, hi)
    this._sort(arr, lo, j - 1)
    this._sort(arr, j + 1, hi)
  }

  private partition(arr: T[], lo: number, hi: number): number {
    let i = lo; let j = hi + 1
    const v = arr[lo]
    while (true) {
      while (this.less(arr[++i], v)) if (i === hi) break
      while (this.less(v, arr[--j])) if (j === lo) break
      if (i >= j) break
      this.exch(i, j)
    }
    this.exch(lo, j)
    return j
  }
}

async function main() {
  const data = await StdIn.readInt(SortMockFile)
  const stopWatch = new StopWatch()
  const quick = new QuickSort<number>(data)
  quick.main(true)
  stopWatch.elapseTime()
}

main()
