package PlayWithAlgorithms;

import java.util.Stack;
import java.util.Vector;

/**
 * Created by Lix on 2017/9/21.
 */

// Dijkstr算法求最短路径
public class Dijkstra<Weight extends Number & Comparable> {

    private WeightedGraph G;      // 图的引用
    private int s;                // 起始点
    private Number[] distTo;      // distTo[i]存储从起始点s到点i的最短路径长度
    private boolean[] marked;     // 标记数组，在算法运行过程中标记节点是否被访问
    private Edge<Weight>[] from;  // 可以用来恢复整个最短路径

    Dijkstra(WeightedGraph graph, int s) {
        assert s >= 0 && s < G.V();
        this.s = s;
        this.G = graph;
        distTo = new Number[G.V()];
        marked = new boolean[G.V()];
        from = new Edge[G.V()];

        for (int i = 0; i < G.V(); i++) {
            distTo[i] = 0.0;
            marked[i] = false;
            from[i] = null;
        }

        IndexMinHeap<Weight> ipq = new IndexMinHeap<Weight>(G.V());

        distTo[s] = 0.0;
        from[s] = new Edge<Weight>(s, s, (Weight)(Number)(0.0));
        ipq.insert(s, (Weight) distTo[s]);
        marked[s] = true;

        while (!ipq.isEmpty()) {
            int v = ipq.extractMinIndex();
            marked[v] = true;

            for (Object item : G.adj(v)) {
                Edge<Weight> e = (Edge<Weight>) item;
                int w = e.other(v);
                if (!marked[w]) {
                    if (from[w] == null || distTo[v].doubleValue() + e.wt().doubleValue() < distTo[w].doubleValue()) {
                        distTo[w] = distTo[v].doubleValue() + e.wt().doubleValue();
                        from[w] = e;
                        if ( ipq.contain(w) ) {
                            ipq.change(w, (Weight) distTo[w]);
                        } else {
                            ipq.insert(w, (Weight) distTo[w]);
                        }
                    }
                }
            }
        }
    }

    public Number shortestPathTo(int w) {
        assert w >= 0 && w < G.V();
        assert hasPathTo(w);
        return distTo[w];
    }

    public boolean hasPathTo(int w) {
        assert w >= 0 && w < G.V();
        return marked[w];
    }

    private Vector<Edge<Weight>> shortestPath(int w) {
        assert w >= 0 && w < G.V();
        assert hasPathTo(w);

        Stack<Edge<Weight>> s = new Stack<Edge<Weight>>();
        Edge<Weight> e = from[w];
        while (e.v() != this.s) {
            s.push(e);
            e = from[e.v()];
        }

        s.push(e);

        Vector<Edge<Weight>> res = new Vector<Edge<Weight>>();
        while (!s.isEmpty()) {
            e = s.pop();
            res.add(e);
        }

        return res;
    }

    // 打印出从s点到w点的路径
    public void showPath(int w){

        assert w >= 0 && w < G.V();
        assert hasPathTo(w);

        Vector<Edge<Weight>> path =  shortestPath(w);
        for( int i = 0 ; i < path.size() ; i ++ ){
            System.out.print( path.elementAt(i).v() + " -> ");
            if( i == path.size()-1 )
                System.out.println(path.elementAt(i).w());
        }
    }
}
