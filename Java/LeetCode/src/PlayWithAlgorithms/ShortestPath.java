package PlayWithAlgorithms;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;
import java.util.Vector;

/**
 * Created by Lix on 2017/9/10.
 */
public class ShortestPath {

    private Graph G;
    private int s;
    private boolean[] visited;
    private int[] from;
    private int[] ord;

    public ShortestPath(Graph graph, int s) {
        assert s >= 0 && s < graph.V();
        this.G = graph;
        this.s = s;

        visited = new boolean[G.V()];
        from = new int[G.V()];
        ord = new int[G.V()];

        for (int i = 0; i < G.V(); i++) {
            visited[i] = false;
            from[i] = -1;
            ord[i] = -1;
        }

        LinkedList<Integer> q = new LinkedList<Integer>();

        q.push( s );
        visited[s] = true;
        ord[s] = 0;
        while (!q.isEmpty()) {
            int v = q.pop();
            for (int i : G.adj(v)) {
                if (!visited[i]) {
                    q.push(i);
                    visited[i] = true;
                    from[i] = v;
                    ord[i] = ord[v] + 1;
                }
            }
        }
    }

    public boolean hasPath(int w) {
        assert w >= 0 && w < G.V();
        return visited[w];
    }

    public Vector<Integer> path(int w) {
        assert w >= 0 && w < G.V();
        Stack<Integer> s = new Stack<Integer>();

        int p = w;
        while (p != -1) {
            s.push(p);
            p = from[p];
        }

        Vector<Integer> vec = new Vector<Integer>();
        while (!s.isEmpty()) {
            vec.add(s.pop());
        }
        return vec;
    }

    public void showPath(int w) {
        assert w >= 0 && w < G.V();
        Vector<Integer> vec = path(w);
        for (int i = 0; i < vec.size(); i++) {
            System.out.print(vec.elementAt(i));
            if (i == vec.size() - 1) {
                System.out.println();
            } else {
                System.out.print(" -> ");
            }
        }
    }

    public int length(int w) {
        assert w >= 0 && w < G.V();
        return ord[w];
    }
}
