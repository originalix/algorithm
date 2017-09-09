package PlayWithAlgorithms;

import java.io.File;

/**
 * Created by Lix on 2017/8/17.
 */
public class Main {

    public static void main(String[] args) {
        String filename = "testG2.txt";
        SparseGraph g1 = new SparseGraph(7, false);
        ReadGraph readGraph1 = new ReadGraph(g1, filename);
        Components components1 = new Components(g1);
        System.out.println("TestG2.txt in Sparse Graph, Components count is " + components1.count());
        g1.show();

        System.out.println();

        Path path = new Path(g1, 0);
        System.out.println("Path from 0 to 6 : ");
        path.showPath(6);
    }
}
