import BaseSort from './base-sort'
import { StdIn, StopWatch } from 'utils'
import { SortMockFile } from '@/constants'

class QuickSort<T> extends BaseSort<T> {
  sort() {
    this.array = this._sort(this.array)
  }

  private _sort(originArr: T[]): T[] {
    const array = [...originArr]
    if (array.length <= 1) return array

    const pivotElement = array.shift()
    const centerArr = []

    const leftArr = []
    const rightArr = []

    while (array.length) {
      const currentElement = array.shift()
      if (currentElement < pivotElement) {
        leftArr.push(currentElement)
      } else if (currentElement > pivotElement) {
        rightArr.push(currentElement)
      } else {
        centerArr.push(currentElement)
      }
    }
    const leftSortedArr = this._sort(leftArr)
    const rightSortedArr = this._sort(rightArr)
    return leftSortedArr.concat(centerArr, rightSortedArr)
  }
}

async function main() {
  const data = await StdIn.readInt(SortMockFile)
  const stopWatch = new StopWatch()
  const quick = new QuickSort<number>(data)
  quick.main()
  stopWatch.elapseTime()
}

main()
