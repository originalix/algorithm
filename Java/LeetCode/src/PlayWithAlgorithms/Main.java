package PlayWithAlgorithms;

import java.io.File;
import java.util.Vector;

/**
 * Created by Lix on 2017/8/17.
 */
public class Main {

    public static void main(String[] args) {
        String filename = "testShortestG1.txt";
        int V = 5;

        SparseWeightedGraph<Integer> g = new SparseWeightedGraph<Integer>(V, true);

        ReadWeightedGraph readWeightedGraph = new ReadWeightedGraph(g, filename);

        System.out.println("Test Dijkstra:\n");

        Dijkstra<Integer> dij = new Dijkstra<Integer>(g, 0);
        for (int i = 1; i < V; i++) {
            if (dij.hasPathTo(i)) {
                System.out.println("Shortest Path to " + i + " : " + dij.shortestPathTo(i));
                dij.showPath(i);
            } else {
                System.out.println("No Path to " + i);
            }

            System.out.println("-------------");
        }
    }
}
