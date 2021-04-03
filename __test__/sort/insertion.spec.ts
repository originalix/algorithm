import { StdIn } from '../../src/utils'
import { TinyIntFile } from '../../src/constants'
import Insertion from '../../src/algs4/sort/insertion'

describe('插入排序', () => {
  test('sort test', async () => {
    const data = await StdIn.readInt(TinyIntFile)
    const insertion = new Insertion<number>(data)
    insertion.sort()
    expect(insertion.isSorted()).toBeTruthy()
  })
})
