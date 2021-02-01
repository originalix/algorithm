import BaseSort from './base-sort'

class Selection extends BaseSort {
  static sort(a: number[]) {
    const N = a.length
    for (let i = 0; i < N; i++) {
      let min = i
      for (let j = i + 1; j < N; j++) {
        if (this.less(a[j], a[min])) min = j
      }
      this.exch(a, i, min)
    }
  }
}

const arr = [1, 3, 33, 5, 21, 50, -23, 7, 23, 9, 21, 100]
Selection.sort(arr)
Selection.main(arr)
