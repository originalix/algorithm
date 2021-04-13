import type { ISP } from '@/types'
import IndexMinPQ from '@/algs4/sort/index-min-pq'
import DirectedEdge from '@/algs4/graph/directed-edge'
import EdgeWeightedDigraph from '@/algs4/graph/edge-weighted-digraph'

export default class DijkstraSP implements ISP {
  private edgeTo: DirectedEdge[]
  private distTo: number[]
  private pq: IndexMinPQ<number>

  constructor(G: EdgeWeightedDigraph, s: number) {
    this.edgeTo = []
    this.distTo = []
    this.pq = new IndexMinPQ()

    for (let v = 0; v < G.countV(); v++) {
      this.distTo[v] = Number.POSITIVE_INFINITY
    }

    this.distTo[s] = 0.0
    this.pq.insert(s, 0.0)
    while (!this.pq.isEmpty()) {
      this.relax(G, this.pq.delMin())
    }
  }

  private relax(G: EdgeWeightedDigraph, v: number) {
    const adj = G.getAdj(v)
    while (adj.hasNext()) {
      const e = adj.next()
      const w = e.to()
      if (this.distTo[w] > this.distTo[v] + e.getWeight()) {
        this.distTo[w] = this.distTo[v] + e.getWeight()
        this.edgeTo[w] = e
        if (this.pq.contains(w)) {
          this.pq.change(w, this.distTo[w])
        } else {
          this.pq.insert(w, this.distTo[w])
        }
      }
    }
  }

  getDistTo(v: number) {
    return +this.distTo[v].toFixed(2)
  }

  hasPathTo(v: number) {
    return this.distTo[v] < Number.POSITIVE_INFINITY
  }

  pathTo(v: number): DirectedEdge[] | null {
    if (!this.hasPathTo(v)) return null
    const path: DirectedEdge[] = []
    for (let e = this.edgeTo[v]; e !== undefined; e = this.edgeTo[e.from()]) {
      path.push(e)
    }
    return path
  }
}
