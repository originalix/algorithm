package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/9/15.
 */
public class Edge <Weight extends Comparable> {
    private int a;
    private int b;
    private Weight weight;

    public Edge(int a, int b, Weight weight) {
        this.a = a;
        this.b = b;
        this.weight = weight;
    }

    public Edge() { }

    public int v() {
        return a;
    }

    public int w() {
        return b;
    }

    public Weight wt() {
        return weight;
    }

    public int other(int x) {
        assert (x == a || x == b);
        return x == a ? b : a;
    }
}
