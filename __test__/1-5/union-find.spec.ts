import { UnionCount } from '../../src/constants'
import { readInt } from '../../src/utils'
import UF from '../../src/algs4/1-5/union-find'
import QuickUnionUF from '../../src/algs4/1-5/quick-union'
import WeightQuickUnionUF from '../../src/algs4/1-5/weight-quick-union'

describe('并查集测试', () => {
  test('并查集', () => {
    const N = UnionCount
    const uf = new UF(N)
    for (let i = 0; i < UnionCount; i++) {
      const p = readInt(0, UnionCount)
      const q = readInt(0, UnionCount)
      if (uf.connected(p, q)) continue
      uf.union(p, q)
    }

    expect(uf.count()).toBeLessThanOrEqual(UnionCount)
  })

  test('树型森林表示的并查集', () => {
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

  test('加权并查集', () => {
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
