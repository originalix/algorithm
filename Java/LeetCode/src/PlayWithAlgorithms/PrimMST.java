package PlayWithAlgorithms;

import java.util.Vector;

/**
 * Created by Lix on 2017/9/18.
 */
public class PrimMST<Weight extends Number & Comparable> {
    private WeightedGraph<Weight> G;
    private IndexMinHeap<Weight> ipq;
    private Edge<Weight>[] edgeTo;
    private Vector<Edge<Weight>> mst;
    private boolean[] marked;
    private Number mstWeight;

    public PrimMST(WeightedGraph graph) {
        G = graph;
        assert graph.E() >= 1;
        ipq = new IndexMinHeap<Weight>(graph.V());

        marked = new boolean[G.V()];
        edgeTo = new Edge[G.V()];
        for (int i = 0; i < G.V(); i++) {
            marked[i] = false;
            edgeTo[i] = null;
        }
        mst = new Vector<Edge<Weight>>();
        visit(0);
        while (!ipq.isEmpty()) {
            int v = ipq.extractMinIndex();
            assert (edgeTo[v] != null);
            mst.add(edgeTo[v]);
            visit(v);
        }

        mstWeight = mst.elementAt(0).wt();
        for (int i = 1; i < mst.size(); i++) {
            mstWeight = mstWeight.doubleValue() + mst.elementAt(i).wt().doubleValue();
        }
    }

    private void visit(int v) {
        assert (!marked[i]);
        marked[v] = true;

        for (Object item : G.adj(v)) {
            Edge<Weight> e = (Edge<Weight>) item;
            int w = e.other(v);
            if (!marked[w]) {
                if (edgeTo[w] == null) {
                    edgeTo[w] = e;
                    ipq.insert(w, e.wt());
                }
            } else if (e.wt().compareTo(edgeTo[w].wt()) < 0) {
                edgeTo[w] = e;
                ipq.change(w, e.wt());
            }
        }
    }
}
