import { StdIn } from '../../src/utils'
import { TinyIntFile } from '../../src/constants'
import Insertion from '../../src/algs4/sort/insertion'
import Selection from '../../src/algs4/sort/selection'
import HeapSort from '../../src/algs4/sort/heap-sort'

describe('插入排序 & 选择排序', () => {
  let data: number[] | null = null
  beforeEach(async () => {
    data = await StdIn.readInt(TinyIntFile)
  })

  test('插入排序', () => {
    const insertion = new Insertion<number>(data)
    insertion.sort()
    expect(insertion.isSorted()).toBeTruthy()
  })

  test('选择排序', () => {
    const selection = new Selection<number>(data)
    selection.sort()
    expect(selection.isSorted()).toBeTruthy()
  })

  test('希尔排序', () => {
    const heapSort = new HeapSort()
    heapSort.sort(data)
    expect(heapSort.isSorted(data)).toBeTruthy()
  })
})
