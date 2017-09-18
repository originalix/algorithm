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

        long startTime, endTime;

//         Test Lazy Prim MST
        System.out.println("Test lazy prim mst: ");
        startTime = System.currentTimeMillis();
        LazyPrimMST<Double> lazyPrimMST1 = new LazyPrimMST<Double>(g1);
        endTime = System.currentTimeMillis();
        System.out.println("The MST Weight is: " + lazyPrimMST1.result());
        System.out.println("Test for G1: " + (endTime - startTime) + "ms. ");

        startTime = System.currentTimeMillis();
        LazyPrimMST<Double> lazyPrimMST2 = new LazyPrimMST<Double>(g2);
        endTime = System.currentTimeMillis();
        System.out.println("The MST Weight is: " + lazyPrimMST2.result());
        System.out.println("Test for G2: " + (endTime - startTime) + "ms. ");

        startTime = System.currentTimeMillis();
        LazyPrimMST<Double> lazyPrimMST3 = new LazyPrimMST<Double>(g3);
        endTime = System.currentTimeMillis();
        System.out.println("The MST Weight is: " + lazyPrimMST3.result());
        System.out.println("Test for G3: " + (endTime - startTime) + "ms. ");

        startTime = System.currentTimeMillis();
        LazyPrimMST<Double> lazyPrimMST4 = new LazyPrimMST<Double>(g4);
        endTime = System.currentTimeMillis();
        System.out.println("The MST Weight is: " + lazyPrimMST4.result());
        System.out.println("Test for G4: " + (endTime - startTime) + "ms. ");

        System.out.println();

        // Test Prim MST
        System.out.println("Test Prim MST: ");

        startTime = System.currentTimeMillis();
        PrimMST<Double> primMST1 = new PrimMST<Double>(g1);
        endTime = System.currentTimeMillis();
        System.out.println("The MST Weight is: " + primMST1.result());
        System.out.println("Test for G1: " + (endTime - startTime) + "ms. ");

        startTime = System.currentTimeMillis();
        PrimMST<Double> primMST2 = new PrimMST<Double>(g2);
        endTime = System.currentTimeMillis();
        System.out.println("The MST Weight is: " + primMST2.result());
        System.out.println("Test for G2: " + (endTime - startTime) + "ms. ");

        startTime = System.currentTimeMillis();
        PrimMST<Double> primMST3 = new PrimMST<Double>(g3);
        endTime = System.currentTimeMillis();
        System.out.println("The MST Weight is: " + primMST3.result());
        System.out.println("Test for G3: " + (endTime - startTime) + "ms. ");

        startTime = System.currentTimeMillis();
        PrimMST<Double> primMST4 = new PrimMST<Double>(g4);
        endTime = System.currentTimeMillis();
        System.out.println("The MST Weight is: " + primMST4.result());
        System.out.println("Test for G4: " + (endTime - startTime) + "ms. ");

        System.out.println();
    }
}
