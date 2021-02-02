import { readInt, StopWatch } from 'utils'

/**
 * 并查集
 * 联合-查找数据结构
 */
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
    return this.id[p]
  }

  union(p:number, q: number) {
    const pID = this.find(p)
    const qID = this.find(q)
    if (pID === qID) return

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pID) {
        this.id[i] = qID
      }
    }
    this._count--
  }
}

function test() {
  const UnionCount = 100000
  const time = new StopWatch()
  const N = UnionCount
  const uf = new UF(N)
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
