import { readInt, StopWatch } from '../utils'
class UF {
  private _count: number
  private id: number[]
  private sz: number[]

  constructor(N: number) {
    this._count = N
    this.id = []
    this.sz = []
    for (let i = 0; i < N; i++) {
      this.id[i] = i
      this.sz[i] = 1
    }
  }

  count() { return this._count }

  showTree() { return this.id }

  connected(p: number, q: number): boolean {
    return this.find(p) === this.find(q)
  }

  find(p: number): number {
    // 跟随链接找到根节点
    while (p != this.id[p]) p = this.id[p]
    return p
  }

  union(p:number, q: number) {
    const i = this.find(p)
    const j = this.find(q)
    if (i === j) return

    if (this.sz[i] < this.sz[j]) {
      this.id[i] = j
      this.sz[j] += this.sz[i]
    } else {
      this.id[j] = i
      this.sz[i] += this.sz[j]
    }
    this._count--
  }
}

function test() {
  const UnionCount = 1000000
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
