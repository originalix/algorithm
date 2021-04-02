import Bag from '../src/algs4/1-3/bag'

let bag: Bag<number> | null
let val: number[]
beforeEach(() => {
  val = [1, 3, 3, 4, 5, 6, 7, 8, 9, 4, 3, 5234, 234, 234, 234, 234, 234, 234]
  bag = new Bag<number>()
  for (const v of val) {
    bag.add(v)
  }
})
describe('背包 Bag 数据结构', () => {
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
