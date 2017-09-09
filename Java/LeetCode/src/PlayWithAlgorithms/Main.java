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
        Components components1 = new Components(g1);
        System.out.println("TestG1.txt in Sparse Graph, Components count is " + components1.count());
        g1.show();

        System.out.println();

        filename = "testG2.txt";
        SparseGraph g2 = new SparseGraph(7, false);
        ReadGraph readGraph2 = new ReadGraph(g2, filename);
        Components components2 = new Components(g2);
        System.out.println("TestG2.txt in Sparse Graph, Components count is " + components2.count());
        g2.show();

        System.out.println();
    }
}
