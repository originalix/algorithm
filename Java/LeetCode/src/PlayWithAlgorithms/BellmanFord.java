package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/9/22.
 */
public class BellmanFord<Weight extends Number & Comparable> {
    private WeightedGraph G;
    private int s;
    private Number[] distTo;
    private Edge<Weight>[] from;

    private boolean hasNegativeCycle;

    public boolean negativeCycle() {
        return hasNegativeCycle;
    }

    public Number shortestPathTo( int w ) {
        assert w >= 0 && w < G.V();
        assert( !hasNegativeCycle );
        assert( hasPathTo(w) );
        return distTo[w];
    }

    private boolean hasPathTo( int w ) {
        assert w >= 0 && w < G.V();
        return from[w] != null;
    }

}
