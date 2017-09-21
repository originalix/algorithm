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
