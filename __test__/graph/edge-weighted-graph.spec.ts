import { StdIn } from '@/utils'
import EdgeWeightedGraph from '@/algs4/graph/edge-weighted-graph'
import LazyPrimMst from '@/algs4/graph/lazy-prim-mst'
import MST from '@/algs4/graph/prim-mst'
import KruskalMST from '@/algs4/graph/kruskal-mst'
import EdgeWeightedDigraph from '@/algs4/graph/edge-weighted-digraph'
import SP from '@/algs4/graph/dijkstra-sp'
import AcyclicSP from '@/algs4/graph/acyclic-sp'

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

describe('最小生成树/最短路径', () => {
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

type SPRes = [number, string[]][]

describe('最短路径', () => {
  let ewdData: number[] | null
  let ewdagData: number[] | null
  beforeEach(async () => {
    const edwStream = await StdIn.readFile('tinyEWD.txt')
    ewdData = edwStream.reduce((prev, line) => [...prev, ...line.split(' ')], []).map((val: string) => +val)
    const ewdagStream = await StdIn.readFile('tinyEWDAG.txt')
    ewdagData = ewdagStream.reduce((prev, line) => [...prev, ...line.split(' ')], []).map((val: string) => +val)
  })

  test('Dijkstra 算法', () => {
    const G = new EdgeWeightedDigraph(8, ewdData)
    const s = 0
    const sp = new SP(G, s)
    const res: SPRes = []
    for (let t = 0; t < G.countV(); t++) {
      res[t] = [sp.getDistTo(t), []]
      if (sp.hasPathTo(t)) {
        for (const e of sp.pathTo(t)?.reverse()) {
          res[t][1].push(e.toString())
        }
      }
    }

    expect(res[0]).toStrictEqual([0, []])
    expect(res[1]).toStrictEqual([1.05, ['0->4 0.38', '4->5 0.35', '5->1 0.32']])
    expect(res[2]).toStrictEqual([0.26, ['0->2 0.26']])
    expect(res[3]).toStrictEqual([0.99, ['0->2 0.26', '2->7 0.34', '7->3 0.39']])
    expect(res[4]).toStrictEqual([0.38, ['0->4 0.38']])
  })

  test('AcyclicSP 算法', () => {
    const G = new EdgeWeightedDigraph(8, ewdagData)
    const s = 5
    const acyclicSP = new AcyclicSP(G, s)
    const res: SPRes = []
    for (let t = 0; t < G.countV(); t++) {
      res[t] = [acyclicSP.getDistTo(t), []]
      if (acyclicSP.hasPathTo(t)) {
        for (const e of acyclicSP.pathTo(t)?.reverse()) {
          res[t][1].push(e.toString())
        }
      }
    }

    expect(res[0]).toStrictEqual([0.73, ['5->4 0.35', '4->0 0.38']])
    expect(res[1]).toStrictEqual([0.32, ['5->1 0.32']])
    expect(res[2]).toStrictEqual([0.62, ['5->7 0.28', '7->2 0.34']])
    expect(res[3]).toStrictEqual([0.61, ['5->1 0.32', '1->3 0.29']])
    expect(res[4]).toStrictEqual([0.35, ['5->4 0.35']])
    expect(res[5]).toStrictEqual([0.0, []])
    expect(res[6]).toStrictEqual([1.13, ['5->1 0.32', '1->3 0.29', '3->6 0.52']])
    expect(res[7]).toStrictEqual([0.28, ['5->7 0.28']])
  })
})
