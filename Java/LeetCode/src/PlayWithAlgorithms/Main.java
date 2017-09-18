package PlayWithAlgorithms;

import java.io.File;
import java.util.Vector;

/**
 * Created by Lix on 2017/8/17.
 */
public class Main {

    public static void main(String[] args) {
        // 使用两种图的存储方式读取testG1.txt文件
        String filename = "testWeightG1.txt";
        int V = 8;

        SparseWeightedGraph<Double> g = new SparseWeightedGraph<Double>(V, false);
        ReadWeightedGraph readGraph = new ReadWeightedGraph(g, filename);

        // Test Lazy Prim MST
        System.out.println("Test lazy prim mst: ");
        LazyPrimMST<Double> lazyPrimMST = new LazyPrimMST<Double>(g);
//        Vector<Edge<Double>> mst = lazyPrimMST.mstE
    }
}
