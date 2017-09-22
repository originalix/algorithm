package PlayWithAlgorithms;

import java.util.Stack;
import java.util.Vector;

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
    
    public Vector<Edge<Weight>> shortestPath(int w ) {
        assert w >= 0 && w < G.V();
        assert (!hasNegativeCycle);
        assert (hasPathTo(w));

        Stack<Edge<Weight>> s = new Stack<Edge<Weight>>();
        Edge<Weight> e = from[w];
        while (e.v() != this.s) {
            s.push(e);
            e = from[e.v()];
        }

        s.push(e);

        Vector<Edge<Weight>> vec = new Vector<Edge<Weight>>();
        while (!s.isEmpty()) {
            e = s.pop();
            vec.add(e);
        }

        return vec;
    }
}
