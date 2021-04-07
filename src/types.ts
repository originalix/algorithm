import DirectedEdge from '@/algs4/graph/directed-edge'
export class NodeItem<T> {
  public item: T
  public next: NodeItem<T>
}

export class NodeIterator<T> {
  private current: NodeItem<T>

  protected setCurrent(first: NodeItem<T>) {
    this.current = first
  }

  hasNext(): boolean {
    return this.current && this.current !== null
  }

  remove() {}
  next(): T {
    const item = this.current.item
    this.current = this.current.next
    return item
  }
}

/**
 * 加权有向边的API
 */
export interface IDirectedEdge {
  getWeight: () => number
  from: () => number
  to: () => number
  toString: () => string
}

/**
 * 加权有向图的API
 */
export interface IEdgeWeightedDigraph {
  countV: () => number
  countE: () => number
  addEdge: (e: DirectedEdge) => void
  getAdj: (v: number) => void
  edges: () => void
}
