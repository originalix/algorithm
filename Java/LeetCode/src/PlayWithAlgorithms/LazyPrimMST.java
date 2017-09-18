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
    private Number mstWeight;

    public LazyPrimMST(WeightedGraph<Weight> graph) {
        G = graph;
        pq = new MinHeap<Edge<Weight>>(G.E());
        marked = new boolean[G.V()];
        mst = new Vector<Edge<Weight>>();

        visit(0);
        while (!pq.isEmpty()) {
            Edge<Weight> e = pq.extractMin();
            if (marked[e.v()] == marked[e.w()]) {
                continue;
            }

            mst.add(e);
            if (!marked[e.v()]) {
                visit(e.v());
            } else {
                visit(e.w());
            }
        }

        mstWeight = mst.elementAt(0).wt();
        for (int i = 1; i < mst.size(); i++) {
            mstWeight = mstWeight.doubleValue() + mst.elementAt(i).wt().doubleValue();
        }
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

    Vector<Edge<Weight>> mstEdges() {
        return mst;
    }

    Number result() {
        return mstWeight;
    }
}
