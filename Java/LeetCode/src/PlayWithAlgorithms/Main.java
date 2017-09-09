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

    }
}
