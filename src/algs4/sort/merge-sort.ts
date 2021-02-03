import BaseSort from './base-sort'
import { StdIn, StopWatch } from 'utils'
import { SortMockFile } from '@/constants'

class MergeSort<T> extends BaseSort<T> {
  sort() {
    this.array = this._sort(this.array)
  }

  private _sort(array: T[]): T[] {
    if (array.length <= 1) return array
    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)
    return this.merge(this._sort(left), this._sort(right))
  }

  private merge(left: T[], right: T[]): T[] {
    const res: T[] = []
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        res.push(left.shift())
      } else {
        res.push(right.shift())
      }
    }
    while (left.length) {
      res.push(left.shift())
    }
    while (right.length) {
      res.push(right.shift())
    }
    return res
  }
}

async function main() {
  const data = await StdIn.readInt(SortMockFile)
  const stopWatch = new StopWatch()
  const merge = new MergeSort<number>(data)
  merge.main()
  stopWatch.elapseTime()
}

main()
