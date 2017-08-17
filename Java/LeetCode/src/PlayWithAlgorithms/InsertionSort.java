package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/17.
 */
public class InsertionSort {

    private InsertionSort() {}

    public static void sort(Comparable[] arr) {
        for (int i = 0; i < arr.length; i++) {
            Comparable e = arr[i];
            int j = i;
            for ( ; j > 0 && (arr[j-1].compareTo(e) > 0); j--) {
                arr[j] = arr[j-1];
            }
            arr[j] = e;
        }
    }
}
