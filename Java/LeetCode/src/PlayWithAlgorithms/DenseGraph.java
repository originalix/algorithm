package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/30.
 */
public class DenseGraph {

    private int n;
    private int m;

    private boolean directed;
    private boolean[][] g;

    public DenseGraph(int n, boolean directed) {
        assert n >= 0;
        this.n = n;
        this.m = 0;
        this.directed = directed;
        g = new boolean[n][n];
    }

    public int V() { return n };
    public int E() { return m };

    public void addEdge(int v, int w) {
       assert v >= 0 && v < n;
       assert w >= 0 && w < n;

       g[v][w] = true;

       if (!directed) {
           g[w][v] = true;
       }

       m++;
    }
    
}
