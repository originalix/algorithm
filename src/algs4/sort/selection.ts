import BaseSort from './base-sort'
import { SortMockFile } from '@/constants'
import { StopWatch, StdIn } from 'utils'

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

async function main() {
  const data = await StdIn.readInt(SortMockFile)
  const stopWatch = new StopWatch()
  const selection = new Selection<number>(data)
  selection.main()
  stopWatch.elapseTime()
}

main()
