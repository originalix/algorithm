class UF {
  private _count: number
  private id: number[]

  constructor(N: number) {
    this._count = N
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
