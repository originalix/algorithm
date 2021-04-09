import { StdIn } from '@/utils'
import EdgeWeightedGraph from '@/algs4/graph/edge-weighted-graph'
import LazyPrimMst from '@/algs4/graph/lazy-prim-mst'
import MST from '@/algs4/graph/prim-mst'
import KruskalMST from '@/algs4/graph/kruskal-mst'
import EdgeWeightedDigraph from '@/algs4/graph/edge-weighted-digraph'

describe('加权图', () => {
  let data: number[] | null
  let ewdData: number[] | null
  beforeEach(async () => {
    const stream = await StdIn.readFile('tinyEDG.txt')
    data = stream.reduce((prev, line) => [...prev, ...line.split(' ')], []).map((val: string) => +val)

    const edwStream = await StdIn.readFile('tinyEWD.txt')
    ewdData = edwStream.reduce((prev, line) => [...prev, ...line.split(' ')], []).map((val: string) => +val)
  })

  test('加权无向图', () => {
    const G = new EdgeWeightedGraph(8, data)
    expect(G.countE()).toBe(16)
  })

  test('加权有向图', async () => {
    const G = new EdgeWeightedDigraph(8, ewdData)
    expect(G.countE()).toBe(15) // 测试边的数量

    const adj = G.getAdj(0)
    const res = []
    while (adj.hasNext()) {
      const e = adj.next()
      res.push({ v: e.from(), w: e.to(), weight: e.getWeight() })
    }

    // 测试图的边及权重是否符合预期
    expect(res).toStrictEqual([
      { v: 0, w: 2, weight: 0.26 },
      { v: 0, w: 4, weight: 0.38 }
    ])
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
