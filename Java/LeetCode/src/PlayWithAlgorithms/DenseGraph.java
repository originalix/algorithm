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
    
}
