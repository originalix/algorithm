package PlayWithAlgorithms;

import java.io.File;

/**
 * Created by Lix on 2017/8/17.
 */
public class Main {

    public static void main(String[] args) {
        String filename = "testG1.txt";
        SparseGraph g1 = new SparseGraph(13, false);
        ReadGraph readGraph1 = new ReadGraph(g1, filename);
        System.out.println("test G1 in Sparse Graph");
        g1.show();

        System.out.println();

        DenseGraph g2 = new DenseGraph(13, false);
        ReadGraph readGraph2 = new ReadGraph(g2, filename);
        System.out.println("test G1 in Dense Graph");
        g2.show();

        System.out.println();

        filename = "testG2.txt";
        SparseGraph g3 = new SparseGraph(7, false);
        ReadGraph readGraph3 = new ReadGraph(g3, filename);
        System.out.println("test G2 in Sparse Graph");
        g3.show();

        System.out.println();

        DenseGraph g4 = new DenseGraph(7, false);
        ReadGraph readGraph4 = new ReadGraph(g4, filename);
        System.out.println("test G2 in Dense Graph");
        g4.show();

        System.out.println();
    }
}
