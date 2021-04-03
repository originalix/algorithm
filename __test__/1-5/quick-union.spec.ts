import { UnionCount } from '../../src/constants'
import { readInt } from '../../src/utils'
import QuickUnionUF from '../../src/algs4/1-5/quick-union'

describe('并查集 QuickUnion', () => {
  test('quick union connected', () => {
    const N = UnionCount
    const uf = new QuickUnionUF(N)
    for (let i = 0; i < UnionCount; i++) {
      const p = readInt(0, UnionCount)
      const q = readInt(0, UnionCount)
      if (uf.connected(p, q)) continue
      uf.union(p, q)
    }

    expect(uf.count()).toBeLessThanOrEqual(UnionCount)
  })
})
