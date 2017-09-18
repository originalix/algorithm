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
        assert (!marked[v]);
        marked[v] = true;

        for (Object item : G.adj(v)) {
            Edge<Weight> e = (Edge<Weight>)item;
            int w = e.other(v);
            if (!marked[w]) {
                if (edgeTo[w] == null) {
                    edgeTo[w] = e;
                    ipq.insert(w, e.wt());
                } else if (e.wt().compareTo(edgeTo[w].wt()) < 0) {
                    edgeTo[w] = e;
                    ipq.change(w, e.wt());
                }
            }
        }
    }

//    void visit(int v){
//
//        assert !marked[v];
//        marked[v] = true;
//
//        // 将和节点v相连接的未访问的另一端点, 和与之相连接的边, 放入最小堆中
//        for( Object item : G.adj(v) ){
//            Edge<Weight> e = (Edge<Weight>)item;
//            int w = e.other(v);
//            // 如果边的另一端点未被访问
//            if( !marked[w] ){
//                // 如果从没有考虑过这个端点, 直接将这个端点和与之相连接的边加入索引堆
//                if( edgeTo[w] == null ){
//                    edgeTo[w] = e;
//                    ipq.insert(w, e.wt());
//                }
//                // 如果曾经考虑这个端点, 但现在的边比之前考虑的边更短, 则进行替换
//                else if( e.wt().compareTo(edgeTo[w].wt()) < 0 ){
//                    edgeTo[w] = e;
//                    ipq.change(w, e.wt());
//                }
//            }
//        }
//
//    }

    Vector<Edge<Weight>> mstEdges() {
        return mst;
    }

    Number result() {
        return mstWeight;
    }

    // 测试 Prim
    public static void main(String[] args) {

        String filename = "testWeightG1.txt";
        int V = 8;

        SparseWeightedGraph<Double> g = new SparseWeightedGraph<Double>(V, false);
        ReadWeightedGraph readGraph = new ReadWeightedGraph(g, filename);

        // Test Prim MST
        System.out.println("Test Prim MST:");
        PrimMST<Double> primMST = new PrimMST<Double>(g);
        Vector<Edge<Double>> mst = primMST.mstEdges();
        for( int i = 0 ; i < mst.size() ; i ++ )
            System.out.println(mst.elementAt(i));
        System.out.println("The MST weight is: " + primMST.result());

        System.out.println();
    }
}
