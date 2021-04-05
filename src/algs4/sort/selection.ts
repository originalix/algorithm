import BaseSort from './base-sort'

/**
 * 选择排序
 */
export default class Selection<T> extends BaseSort<T> {
  sort() {
    const N = this.array.length
    for (let i = 0; i < N; i++) {
      let min = i
      for (let j = i + 1; j < N; j++) {
        if (this.less(this.array[j], this.array[min])) min = j
      }
      this.exch(i, min)
    }
  }
}
