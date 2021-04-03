import { UnionCount } from '../../src/constants'
import { readInt } from '../../src/utils'
import WeightQuickUnionUF from '../../src/algs4/1-5/weight-quick-union'

describe('加权并查集 WeightQuickUnion', () => {
  test('weight quick union connected', () => {
    const N = UnionCount
    const uf = new WeightQuickUnionUF(N)
    for (let i = 0; i < UnionCount; i++) {
      const p = readInt(0, UnionCount)
      const q = readInt(0, UnionCount)
      if (uf.connected(p, q)) continue
      uf.union(p, q)
    }

    expect(uf.count()).toBeLessThanOrEqual(UnionCount)
  })
})
