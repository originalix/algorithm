package PlayWithAlgorithms;

import java.util.Arrays;

/**
 * Created by Lix on 2017/8/17.
 */
public class Main {
    public static void main(String[] args) {
        int N = 20000;
        System.out.println("Test for random array, size = " + N + ", random range [ 0, " + N +" ]");
        Integer[] arr1 = SortTestHelper.generateRandomArray(N, 0, N);
        Integer[] arr2 = Arrays.copyOf(arr1, arr1.length);

        SortTestHelper.testSort("PlayWithAlgorithms.SelectionSort", arr1);

        System.out.println();
    }
}
