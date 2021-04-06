import { StdIn } from '@/utils'
import EdgeWeightedGraph from '@/algs4/graph/edge-weighted-graph'
import LazyPrimMst from '@/algs4/graph/lazy-prim-mst'
import MST from '@/algs4/graph/mst'
import KruskalMST from '@/algs4/graph/kruskal-mst'

describe('加权图', () => {
  let data: number[] | null
  beforeEach(async () => {
    const stream = await StdIn.readFile('tinyEDG.txt')
    data = stream.reduce((prev, line) => [...prev, ...line.split(' ')], []).map((val: string) => +val)
  })

  test('加权无向图', () => {
    const G = new EdgeWeightedGraph(8, data)
    expect(G.getE()).toBe(16)
  })
})

describe('最小生成树', () => {
  let data: number[] | null
  beforeEach(async () => {
    const stream = await StdIn.readFile('tinyEDG.txt')
    data = stream.reduce((prev, line) => [...prev, ...line.split(' ')], []).map((val: string) => +val)
  })

  test('Prim 算法(非即时)', () => {
    const G = new EdgeWeightedGraph(8, data)
    const mst = new LazyPrimMst(G)
    expect(mst.getWeight()).toBe(1.81)
  })

  test('Prim 算法', () => {
    const G = new EdgeWeightedGraph(8, data)
    const mst = new MST(G)
    expect(mst.getWeight()).toBe(1.81)
  })

  test('Kruskal 算法', () => {
    const G = new EdgeWeightedGraph(8, data)
    const mst = new KruskalMST(G)
    expect(mst.weight()).toBe(1.81)
  })
})
