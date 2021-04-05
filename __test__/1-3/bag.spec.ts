import Bag from '../../src/algs4/1-3/bag'
import { StdIn } from '../../src/utils'
import { TinyIntFile } from '../../src/constants'

describe('Bag 背包', () => {
  test('bag size and loop', async () => {
    const bag = new Bag<number>()
    const val = await StdIn.readInt(TinyIntFile)
    for (const v of val) {
      bag.add(v)
    }

    expect(bag.size()).toBe(val.length)

    const res = []
    while (bag.hasNext()) {
      res.push(bag.next())
    }

    expect(res.length).toBe(val.length)
  })
})
