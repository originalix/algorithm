import { IEdgeWeightedDigraph } from '@/types'
import Bag from '@/algs4/1-3/bag'
import DirectedEdge from './directed-edge'

/**
 *
 * 加权有向图的数据类型
 * @export
 * @class EdgeWeightedDigraph
 * @implements {IEdgeWeightedDigraph}
 */
export default class EdgeWeightedDigraph implements IEdgeWeightedDigraph {
  private V: number
  private E: number
  private adj: Bag<DirectedEdge>[]

  constructor(V: number)
  constructor(data: number[])
  constructor(V?: never, data?: never[]) {
    this.V = V
    this.E = 0
    this.adj = []
    for (let v = 0; v < V; v++) {
      this.adj[v] = new Bag<DirectedEdge>()
    }

    console.log(data)
  }

  countV() {
    return this.V
  }
  countE() {
    return this.E
  }
  addEdge(e: DirectedEdge) {
    this.adj[e.from()].add(e)
    this.E++
  }

  getAdj(v: number) {
    return this.adj[v]
  }
  edges() {
    const bag = new Bag<DirectedEdge>()
    for (let v = 0; v < this.V; v++) {
      const adj = this.getAdj(v)
      while (adj.hasNext()) {
        const e = adj.next()
        bag.add(e)
      }
    }
    return bag
  }
}
