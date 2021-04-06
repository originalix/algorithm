import BaseSort from './base-sort'

/**
 * 归并排序
 */
export default class MergeSort<T> extends BaseSort<T> {
  private aux: T[] // 归并所需的辅助数组

  sort(arr: T[]) {
    this.aux = []
    this._sort(arr, 0, arr.length - 1)
  }

  private _sort(arr: T[], lo: number, hi: number) {
    if (hi <= lo) return
    const mid = lo + Math.floor((hi - lo) / 2)
    this._sort(arr, lo, mid) // 将左半边排序
    this._sort(arr, mid + 1, hi) // 将右半边排序
    this.merge(arr, lo, mid, hi) // 归并结果
  }

  private merge(arr: T[], lo: number, mid: number, hi: number) {
    // 将 arr[lo..mid] 和 arr[mid+1..hi] 归并jj
    let i = lo
    let j = mid + 1
    for (let k = lo; k <= hi; k++) {
      // 将 arr[lo..hi] 复制到aux[lo..hi]
      this.aux[k] = arr[k]
    }
    for (let k = lo; k <= hi; k++) {
      // 归并回到arr[lo..hi]
      if (i > mid) arr[k] = this.aux[j++]
      else if (j > hi) arr[k] = this.aux[i++]
      else if (this.less(this.aux[j], this.aux[i])) arr[k] = this.aux[j++]
      else arr[k] = this.aux[i++]
    }
  }
}
