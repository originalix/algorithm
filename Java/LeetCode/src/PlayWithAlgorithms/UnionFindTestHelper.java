package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/28.
 */
public class UnionFindTestHelper {

    public static void testUF1(int n ) {
        UnionFind1 uf = new UnionFind1(n);

        long startTime = System.currentTimeMillis();

        for (int i = 0; i < n; i++) {
            int a = (int) (Math.random() * n);
            int b = (int) (Math.random() * n);

            uf.unionElements(a, b);
        }

        for (int i = 0; i < n; i++) {
            int a = (int) (Math.random() * n);
            int b = (int) (Math.random() * n);

            uf.isConnected(a, b);
        }

        long endTime = System.currentTimeMillis();

        System.out.println("UF1, " + 2*n + "ops, " + (endTime - startTime) + "ms");
    }
}