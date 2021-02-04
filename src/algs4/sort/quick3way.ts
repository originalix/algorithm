import BaseSort from './base-sort'
import { StdIn, StopWatch } from 'utils'
import { SortMockFile } from '@/constants'

class Quick3Way<T> extends BaseSort<T> {
  sort(arr: T[]) {
    this._sort(arr, 0, arr.length)
  }

  private compareTo(a: T, b: T) {
    if (a < b) return -1
    else if (a > b) return 1
    else return 0
  }

  private _sort(arr: T[], lo: number, hi: number) {
    if (hi <= lo) return
    let lt = lo; let i = lo + 1; let gt = hi
    const v = arr[lo]
    while (i <= gt) {
      const cmp = this.compareTo(arr[i], v)
      if (cmp < 0) this.exch(lt++, i++)
      else if (cmp > 0) this.exch(i, gt--)
      else i++
    }
    this._sort(arr, lo, lt - 1)
    this._sort(arr, gt + 1, hi)
  }
}

async function main() {
  const data = await StdIn.readInt(SortMockFile)
  const stopWatch = new StopWatch()
  const quick = new Quick3Way<number>(data)
  quick.main(true)
  stopWatch.elapseTime()
}

main()
