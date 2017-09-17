package PlayWithAlgorithms;

import java.util.Vector;

/**
 * Created by Lix on 2017/9/18.
 */
public class LazyPrimMST<Weight extends Number & Comparable> {
    private WeightedGraph<Weight> G;
    private MinHeap<Edge<Weight>> pq;
    private boolean[] marked;
    private Vector<Edge<Weight>> mst;
    private Weight mstWeight;

    public LazyPrimMST(WeightedGraph<Weight> graph) {
        G = graph;
        pq = new MinHeap<Edge<Weight>>(G.E());
        marked = new boolean[G.V()];
        mst = new Vector<Edge<Weight>>();

        visit(0);
    }

    private void visit(int v) {
        assert(!marked[v]);
        marked[v] = true;

        for (Edge<Weight> e : G.adj(v)) {
            if (!marked[e.other(v)]) {
                pq.insert(e);
            }
        }
    }
}
