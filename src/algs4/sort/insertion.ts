import BaseSort from './base-sort'

/**
 * 插入排序
 */
export default class Insertion<T> extends BaseSort<T> {
  sort() {
    const N = this.array.length
    for (let i = 1; i < N; i++) {
      for (let j = i; j > 0 && this.less(this.array[j], this.array[j - 1]); j--) {
        this.exch(j, j - 1)
      }
    }
  }
}
