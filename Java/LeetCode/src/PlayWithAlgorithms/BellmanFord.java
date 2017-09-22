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


}
