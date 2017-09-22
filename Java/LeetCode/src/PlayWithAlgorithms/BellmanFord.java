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

    public BellmanFord(WeightedGraph graph, int s) {
        this.G = graph;
        this.s = s;

        distTo = new Number[G.V()];
        for (int i = 0; i < G.V(); i++) {
            from[i] = null;
        }
        distTo[s] = 0.0;
        from[s] = new Edge<Weight>(s, s, (Weight)(Number) 0.0);

        for (int pass = 1; pass < G.V(); pass++) {
            for (int i = 0; i < G.V(); i++) {
                for (Object item : G.adj(i)) {
                    Edge<Weight> e = (Edge<Weight>) item;
                    if (from[e.v()] != null && ( from[e.w()] == null || distTo[e.v()].doubleValue() + e.wt().doubleValue() < distTo[e.w()].doubleValue())) {
                        distTo[e.w()] = distTo[e.v()].doubleValue() + e.wt().doubleValue();
                        from[e.w()] = e;
                    }
                }
            }
        }

        hasNegativeCycle = detectNegativeCycle();
    }

    private boolean detectNegativeCycle() {
        for (int i = 0; i < G.V(); i++) {
            for (Object item : G.adj(i)) {
                Edge<Weight> e = (Edge<Weight>) item;
                if (from[e.v()] != null && ( from[e.w()] == null || distTo[e.v()].doubleValue() + e.wt().doubleValue() < distTo[e.w()].doubleValue())) {
                    return true;
                }
            }
        }
        return false;
    }

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

    public void showPath(int w) {
        assert w >= 0 && w < G.V();
        assert (!hasNegativeCycle);
        assert hasPathTo(w);

        Vector<Edge<Weight>> vec = shortestPath(w);
        for (int i = 0; i < vec.size(); i++) {
            System.out.print(vec.elementAt(i).v() + " -> ");
            if (i == vec.size() - 1) {
                System.out.println(vec.elementAt(i).w());
            }
        }
    }
}
