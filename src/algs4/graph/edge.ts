/**
 * 带权重的边的数据类型
 *
 */
export default class Edge {
  private v: number
  private w: number
  private weight: number

  constructor(v: number, w: number, weight: number) {
    this.v = v
    this.w = w
    this.weight = weight
  }

  getWeight() {
    return this.weight
  }

  either() {
    return this.v
  }

  other(vertex: number) {
    if (vertex === this.v) return this.w
    else if (vertex === this.w) return this.v
    else throw new Error('Incosistent edge')
  }

  compareTo(that: Edge) {
    if (this.getWeight() < that.getWeight()) return -1
    else if (this.getWeight() > that.getWeight()) return 1
    else return 0
  }

  toString() {
    return `${this.v} ${this.w} ${this.weight}`
  }
}
