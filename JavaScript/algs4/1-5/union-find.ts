import { readInt, StopWatch } from '../utils'
class UF {
  private _count: number
  private id: number[]

  constructor(N: number) {
    this._count = N
    this.id = []
    for (let i = 0; i < N; i++) {
      this.id[i] = i
    }
  }

  count() { return this._count }

  connected(p: number, q: number): boolean {
    return this.find(p) === this.find(q)
  }

  find(p: number): number {
    while (p != this.id[p]) p = this.id[p]
    return p
  }

  union(p:number, q: number) {
    const pRoot = this.find(p)
    const qRoot = this.find(q)

    if (pRoot === qRoot) return
    this.id[pRoot] = qRoot
    this._count--
  }
}

function test() {
  const UnionCount = 200000
  const time = new StopWatch()
  const N = UnionCount
  const uf = new UF(N)
  for (let i = 0; i < UnionCount; i++) {
    const p = readInt(UnionCount)
    const q = readInt(UnionCount)
    if (uf.connected(p, q)) continue
    uf.union(p, q)
    console.log(p + ' ' + q)
  }
  console.log(uf.count() + 'components')
  time.elapseTime()
}

test()
