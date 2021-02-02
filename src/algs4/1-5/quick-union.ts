import { UnionCount } from '@/constants'
import { readInt, StopWatch } from 'utils'

/**
 * 并查集
 * 树型森林的表示
 */
class QuickUnionUF {
  private _count: number
  private id: number[]

  constructor(N: number) {
    this._count = N
    this.id = []
    for (let i = 0; i < N; i++) {
      this.id[i] = i
    }
  }

  count(): number { return this._count }

  connected(p: number, q:number): boolean {
    return this.find(p) === this.find(q)
  }

  find(p: number): number {
    // 找出分量的名称
    while (p !== this.id[p]) p = this.id[p]
    return p
  }

  union(p: number, q:number) {
    // 将 p 和 q 的根节点统一
    const pRoot = this.find(p)
    const qRoot = this.find(q)

    if (pRoot === qRoot) return

    this.id[pRoot] = qRoot
    this._count--
  }
}

function test() {
  const time = new StopWatch()
  const N = UnionCount
  const uf = new QuickUnionUF(N)
  for (let i = 0; i < UnionCount; i++) {
    const p = readInt(0, UnionCount)
    const q = readInt(0, UnionCount)
    if (uf.connected(p, q)) continue
    uf.union(p, q)
    console.log(p + ' ' + q)
  }
  console.log(uf.count() + 'components')
  time.elapseTime()
}

test()
