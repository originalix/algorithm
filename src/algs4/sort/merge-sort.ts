import BaseSort from './base-sort'
import { StdIn, StopWatch } from 'utils'
import { SortMockFile } from '@/constants'

class MergeSort<T> extends BaseSort<T> {
  private aux: T[] // 归并所需的辅助数组

  sort(a: T[]) {
    this.aux = []
    this._sort(a, 0, a.length - 1)
  }

  private _sort(a: T[], lo: number, hi: number) {
    if (hi <= lo) return
    const mid = lo + Math.floor((hi - lo) / 2)
    this._sort(a, lo, mid) // 将左半边排序
    this._sort(a, mid + 1, hi) // 将右半边排序
    this.merge(a, lo, mid, hi) // 归并结果
  }

  private merge(a: T[], lo: number, mid: number, hi: number) {
    // 将a[lo..mid] 和 a[mid+1..hi] 归并
    let i = lo; let j = mid + 1
    for (let k = lo; k <= hi; k++) { // 将a[lo..mid] 复制到 aux[lo..hi]
      this.aux[k] = a[k]
    }
    for (let k = lo; k <= hi; k++) { // 归并回到 a[lo..hi]
      if (i > mid) a[k] = this.aux[j++]
      else if (j > hi) a[k] = this.aux[i++]
      else if (this.less(this.aux[j], this.aux[i])) a[k] = this.aux[j++]
      else a[k] = this.aux[i++]
    }
  }
}

async function main() {
  const data = await StdIn.readInt(SortMockFile)
  const stopWatch = new StopWatch()
  const merge = new MergeSort<number>(data)
  merge.main(true)
  stopWatch.elapseTime()
}

main()
