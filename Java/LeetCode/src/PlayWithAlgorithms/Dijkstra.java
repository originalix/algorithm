package PlayWithAlgorithms;

import java.util.Stack;
import java.util.Vector;

/**
 * Created by Lix on 2017/9/21.
 */
public class Dijkstra<Weight extends Number & Comparable> {
    private WeightedGraph G;
    private int s;
    private Number[] distTo;
    private boolean[] marked;
    private Edge<Weight>[] from;

    Dijkstra(WeightedGraph G, int s) {
        assert s >= 0 && s < G.V();
        this.s = s;
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

    private boolean hasPathTo(int w) {
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
}
