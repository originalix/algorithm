import { StdIn } from '../../src/utils'
import { TinyIntFile } from '../../src/constants'
import HeapSort from '../../src/algs4/sort/heap-sort'

describe('希尔排序', () => {
  test('sort test', async () => {
    const data = await StdIn.readInt(TinyIntFile)
    const heapSort = new HeapSort()
    heapSort.sort(data)
    expect(heapSort.isSorted(data)).toBeTruthy()
  })
})
