import Bag from '../src/algs4/1-3/bag'
import { strictEqual } from 'assert'

describe('背包 Bag 数据结构', () => {
  test('bag size', () => {
    const val = [1, 3, 3, 4, 5, 6, 7, 8, 9, 4, 3, 5234, 234, 234, 234, 234, 234, 234]
    const bag = new Bag<number>()
    for (const v of val) {
      bag.add(v)
    }
    strictEqual(bag.size(), val.length)
  })
})
