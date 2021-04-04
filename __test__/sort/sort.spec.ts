import { StdIn } from '../../src/utils'
import { TinyIntFile } from '../../src/constants'
import Insertion from '../../src/algs4/sort/insertion'
import Selection from '../../src/algs4/sort/selection'
import HeapSort from '../../src/algs4/sort/heap-sort'
import ShellSort from '../../src/algs4/sort/shell-sort'
import MergeSort from '../../src/algs4/sort/merge-sort'
import QuickSort from '../../src/algs4/sort/quick-sort'
import Quick3Way from '../../src/algs4/sort/quick3way'

describe('排序算法测试', () => {
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
    const shell = new ShellSort<number>(data)
    shell.sort()
    expect(shell.isSorted()).toBeTruthy()
  })

  test('归并排序', () => {
    const mergeSort = new MergeSort(data)
    mergeSort.sort(data)
    expect(mergeSort.isSorted()).toBeTruthy()
  })

  test('快速排序', () => {
    const quickSort = new QuickSort(data)
    quickSort.sort(data)
    expect(quickSort.isSorted()).toBeTruthy()
  })

  test('三路快排', () => {
    const quick3Way = new Quick3Way(data)
    quick3Way.sort(data)
    expect(quick3Way.isSorted()).toBeTruthy()
  })

  test('堆排序', () => {
    const heapSort = new HeapSort()
    heapSort.sort(data)
    expect(heapSort.isSorted(data)).toBeTruthy()
  })
})
