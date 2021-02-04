import BaseSort from './base-sort'
import { StdIn, StopWatch } from 'utils'
import { SortMockFile } from '@/constants'

class QuickSort<T> extends BaseSort<T> {
  sort(arr: T[]) {
    this._sort(arr, 0, arr.length)
  }

  private _sort(arr: T[], lo: number, hi: number) {
    if (hi <= lo) return
    const j = this.partition(arr, lo, hi) // 切分
    this._sort(arr, lo, j - 1) // 将左半边部分arr[lo..j-1]排序
    this._sort(arr, j + 1, hi) // 将右半边部分arr[j+1..hi]排序
  }

  private partition(arr: T[], lo: number, hi: number): number {
    let i = lo; let j = hi + 1 // 左右扫描指针
    const v = arr[lo] // 切分元素
    while (true) { // 扫描左右，检查扫描是否结束并交换元素
      while (this.less(arr[++i], v)) if (i === hi) break
      while (this.less(v, arr[--j])) if (j === lo) break
      if (i >= j) break
      this.exch(i, j)
    }
    this.exch(lo, j) // 将 v=a[j] 放入正确的位置
    return j // arr[lo..j-1] <= arr[j] <= arr[j+1..hi] 达成
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
