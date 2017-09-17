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

    public Edge(Edge<Weight> e) {
        this.a = e.a;
        this.b = e.b;
        this.weight = e.weight;
    }

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

    /**
     * 输出边的信息
     * @return String
     */
    public String toString() {
        return "" + a + "-" + b + ": " + weight;
    }

    /**
     * 边之间的比较
     * @param that 另一个边
     * @return Int
     */
    public int compareTo(Edge that) {
        if (weight.compareTo(that.wt()) < 0) {
            return -1;
        } else if (weight.compareTo(that.w()) > 0) {
            return +1;
        } else {
            return 0;
        }
    }
}
