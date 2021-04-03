import { UnionCount } from '../src/constants'
import { readInt, StopWatch } from '../src/utils'
import UF from '../src/algs4/1-5/union-find'

describe('并查集 UnionFind测试', () => {
  test('union find connected', () => {
    const time = new StopWatch()
    const N = UnionCount
    const uf = new UF(N)
    for (let i = 0; i < UnionCount; i++) {
      const p = readInt(0, UnionCount)
      const q = readInt(0, UnionCount)
      if (uf.connected(p, q)) continue
      uf.union(p, q)
    }
    time.elapseTime()

    expect(uf.count()).toBeLessThanOrEqual(UnionCount)
  })
})
