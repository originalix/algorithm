import { cloneDeep } from 'lodash'
import type { ISP } from '@/types'
import DirectedEdge from '@/algs4/graph/directed-edge'
import EdgeWeightedDigraph from '@/algs4/graph/edge-weighted-digraph'
import Topological from '@/algs4/graph/topological'

/**
 *
 * 无环加权有向图的最短路径算法
 * @export
 * @class AcyclicSP
 * @implements {ISP}
 */
export default class AcyclicSP implements ISP {
  private edgeTo: DirectedEdge[]
  private distTo: number[]

  constructor(G: EdgeWeightedDigraph, s: number) {
    this.edgeTo = []
    this.distTo = []
    for (let v = 0; v < G.countV(); v++) {
      this.distTo[v] = Number.POSITIVE_INFINITY
    }
    this.distTo[s] = 0.0
    const top = new Topological(cloneDeep(G))
    const order = top.getOrder()
    while (!order.isEmpty()) {
      const v = order.pop()
      const adj = G.getAdj(v)
      while (adj.hasNext()) {
        const e = adj.next()
        this.relax(e)
      }
    }
  }

  private relax(e: DirectedEdge) {
    const v = e.from()
    const w = e.to()
    if (this.distTo[w] > this.distTo[v] + e.getWeight()) {
      this.distTo[w] = +(this.distTo[v] + e.getWeight()).toFixed(2)
      this.edgeTo[w] = e
    }
  }

  getDistTo(v: number) {
    return this.distTo[v]
  }

  hasPathTo(v: number) {
    return this.distTo[v] < Number.POSITIVE_INFINITY
  }

  pathTo(v: number) {
    if (!this.hasPathTo(v)) return null
    const path: DirectedEdge[] = []
    for (let e = this.edgeTo[v]; e !== undefined; e = this.edgeTo[e.from()]) {
      path.push(e)
    }
    return path
  }
}
