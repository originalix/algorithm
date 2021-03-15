import BaseSort from './base-sort'
import { StdIn, StopWatch } from 'utils'
import { SortMockFile, __DEBUG__ } from '@/constants'

class ShellSort<T> extends BaseSort<T> {
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
  const shell = new ShellSort<number>(data)
  shell.main()
  stopWatch.elapseTime()
}

__DEBUG__ && main()
