import BaseSort from './base-sort'

class Selection<T> extends BaseSort<T> {
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

const arr = [1, 3, 33, 5, 21, 0, 50, -23, 7, 23, 9, 21, 100]
const selection = new Selection<number>(arr)
selection.main()
