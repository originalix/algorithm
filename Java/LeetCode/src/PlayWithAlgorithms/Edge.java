package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/9/15.
 */

// 边
public class Edge <Weight extends Comparable> implements Comparable<Edge<Weight>> {
    private int a;          // 边的两个端点
    private int b;
    private Weight weight;  // 边的权值

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
    }  // 返回第一个顶点

    public int w() {
        return b;
    }  // 返回第二个顶点

    public Weight wt() {
        return weight;
    } // 返回权值

    // 给定一个顶点，返回另一个顶点
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
        } else if (weight.compareTo(that.wt()) > 0) {
            return +1;
        } else {
            return 0;
        }
    }
}
