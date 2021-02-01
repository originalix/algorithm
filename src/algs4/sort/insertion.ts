import BaseSort from './base-sort'

class Insertion<T> extends BaseSort<T> {
  sort() {
    const N = this.array.length
    for (let i = 1; i < N; i++) {
      for (let j = i; j > 0 && this.less(this.array[j], this.array[j - 1]); j--) {
        this.exch(j, j - 1)
      }
    }
  }
}

const arr = [1, 3, 33, 5, 21, 0, 50, -23, 7, 23, 9, 21, 100]
const insertion = new Insertion<number>(arr)
insertion.main()
