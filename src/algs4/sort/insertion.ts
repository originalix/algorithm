import BaseSort from './base-sort'
import { StopWatch, StdIn } from 'utils'
import { SortMockFile, __DEBUG__ } from '@/constants'

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

async function main() {
  const data = await StdIn.readInt(SortMockFile)
  const stopWatch = new StopWatch()
  const insertion = new Insertion<number>(data)
  insertion.main()
  stopWatch.elapseTime()
}

__DEBUG__ && main()
