package PlayWithAlgorithms;

import java.util.Arrays;

/**
 * Created by Lix on 2017/8/17.
 */
public class Main {
    public static void main(String[] args) {
        int N = 100000;

        // 测试1：一般测试
        System.out.println("Test for random array, size = " + N + ", random range [ 0, " + N +" ]");
        Integer[] arr1 = SortTestHelper.generateRandomArray(N, 0, N);
        Integer[] arr2 = Arrays.copyOf(arr1, arr1.length);

        SortTestHelper.testSort("PlayWithAlgorithms.SelectionSort", arr1);
        SortTestHelper.testSort("PlayWithAlgorithms.InsertionSort", arr2);

        System.out.println();

        // 测试2: 有序性更强的测试
        System.out.println("Test for more ordered random array, size = " + N + ", random range [ 0, 3 ]");

        arr1 = SortTestHelper.generateRandomArray(N, 0, 3);
        arr2 = Arrays.copyOf(arr1, arr1.length);

        SortTestHelper.testSort("PlayWithAlgorithms.SelectionSort", arr1);
        SortTestHelper.testSort("PlayWithAlgorithms.InsertionSort", arr2);

        System.out.println();


    }
}
