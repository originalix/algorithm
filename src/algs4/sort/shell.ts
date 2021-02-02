import BaseSort from './base-sort'
import { SortMockFile } from '@/constants'
import { StdIn, StopWatch } from 'utils'

class Shell<T> extends BaseSort<T> {
  sort() {
    const N = this.array.length
    let h = 1
    while (h < N / 3) h = h * 3 + 1
    while (h >= 1) {
      for (let i = h; i < N; i++) {
        for (let j = i; j >= h && this.less(this.array[j], this.array[j - h]); j -= h) {
          this.exch(j, j - h)
        }
      }
      h = Math.floor(h / 3)
    }
  }
}

async function main() {
  const data = await StdIn.readInt(SortMockFile)
  const stopWatch = new StopWatch()
  const shell = new Shell<number>(data)
  shell.main()
  stopWatch.elapseTime()
}

main()
