import { IDirectedEdge } from '@/types'

/**
 * 加权有向边
 *
 */
export default class DirectedEdge implements IDirectedEdge {
  private v: number
  private w: number
  private weight: number

  constructor(v: number, w: number, weight: number) {
    this.v = v
    this.w = w
    this.weight = weight
  }

  getWeight() { return this.weight }

  from() { return this.v }

  to() { return this.w }

  toString() { return `${this.v}->${this.w} ${this.weight}` }
}
