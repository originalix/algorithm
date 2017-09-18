package PlayWithAlgorithms;

import java.io.File;
import java.util.Vector;

/**
 * Created by Lix on 2017/8/17.
 */
public class Main {

    public static void main(String[] args) {
        // 使用两种图的存储方式读取testG1.txt文件
        String filename1 = "testWeightG1.txt";
        int V1 = 8;

        String filename2 = "testWeightG2.txt";
        int V2 = 250;

        String filename3 = "testWeightG3.txt";
        int V3 = 1000;

        String filename4 = "testWeightG4.txt";
        int V4 = 10000;

        SparseWeightedGraph<Double> g1 = new SparseWeightedGraph<Double>(V1, false);
        ReadWeightedGraph readGraph1 = new ReadWeightedGraph(g1, filename1);
        System.out.println(filename1 + " load successfully.");

        SparseWeightedGraph<Double> g2 = new SparseWeightedGraph<Double>(V2, false);
        ReadWeightedGraph readGraph2 = new ReadWeightedGraph(g2, filename2);
        System.out.println(filename2 + " load successfully.");

        SparseWeightedGraph<Double> g3 = new SparseWeightedGraph<Double>(V3, false);
        ReadWeightedGraph readGraph3 = new ReadWeightedGraph(g3, filename3);
        System.out.println(filename3 + " load successfully.");

        SparseWeightedGraph<Double> g4 = new SparseWeightedGraph<Double>(V4, false);
        ReadWeightedGraph readGraph4 = new ReadWeightedGraph(g4, filename4);
        System.out.println(filename4 + " load successfully.");

        System.out.println();

//        // Test Lazy Prim MST
//        System.out.println("Test lazy prim mst: ");
//        LazyPrimMST<Double> lazyPrimMST = new LazyPrimMST<Double>(g);
//        Vector<Edge<Double>> mst = lazyPrimMST.mstEdges();
//        for (int i = 0; i < mst.size(); i++) {
//            System.out.println(mst.elementAt(i));
//        }
//        System.out.println("The MST Weight is: " + lazyPrimMST.result());
//
//        // Test Prim MST
//        System.out.println("Test Prim MST: ");
//        PrimMST<Double> primMST = new PrimMST<Double>(g);
//        Vector<Edge<Double>> mst1 = primMST.mstEdges();
//        for (int i = 0; i < mst1.size(); i++) {
//            System.out.println(mst1.elementAt(i));
//        }
//        System.out.println("The MST Weight is " + primMST.result());
    }
}
