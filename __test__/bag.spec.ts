import Bag from '../src/algs4/1-3/bag'
import { StdIn } from '../src/utils'
import { TinyIntFile } from '../src/constants'

describe('背包 Bag 数据结构', () => {
  let bag: Bag<number> | null
  let val: number[]
  beforeAll(async () => {
    val = await StdIn.readInt(TinyIntFile)
    bag = new Bag<number>()
    for (const v of val) {
      bag.add(v)
    }
  })

  test('bag size', () => {
    expect(bag.size()).toBe(val.length)
  })

  test('元素遍历', () => {
    const res = []
    while (bag.hasNext()) {
      res.push(bag.next())
    }
    expect(res.length).toBe(val.length)
  })
})
