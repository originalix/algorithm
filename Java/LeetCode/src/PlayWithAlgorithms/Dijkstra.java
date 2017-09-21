package PlayWithAlgorithms;

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

    public Number shortestPathTo(int w) {
        assert w >= 0 && w < G.V();
        assert hasPathTo(w);
        return distTo[w];
    }

    public boolean hasPathTo(int w) {
        assert w >= 0 && w < G.V();
        return marked[w];
    }
}
