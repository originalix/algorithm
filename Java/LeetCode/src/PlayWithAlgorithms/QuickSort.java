package PlayWithAlgorithms;

import java.util.Arrays;

/**
 * Created by Lix on 2017/8/18.
 */
public class QuickSort {

    private QuickSort() {}

    public static void sort(Comparable[] arr) {
        sort(arr, 0, arr.length - 1);
    }

    // 递归的使用快速排序，对arr[l...r]的范围进行排序
    private static void sort(Comparable[] arr, int l, int r) {
//        if (l >= r) {
//            return;
//        }

        /* 优化点1：小于16个数据时，改用插入排序 */
        if (r - l <= 15) {
            InsertionSort.sort(arr, l, r);
            return;
        }
        int p = partition(arr, l, r);
        sort(arr, l, p-1);
        sort(arr, p+1, r);
    }

    /*
    *    对arr[l...r]部分进行partition操作
    *    返回p, 使得arr[l...p-1] < arr[p]; arr[p+1...r] > arr[p]
    * */
    private static int partition(Comparable[] arr, int l, int r) {

        /* 优化点2： 使用随机元素，作用 针对近乎有序的数组排序 */
        swap(arr, l, (int) (Math.random() * (r-l+1)) +l);

        Comparable v = arr[l];

        // arr[l+1...j] < v; arr[j+1...r] > v
        int j = l;
        for (int i = l + 1; i <= r; i++) {
            if (arr[i].compareTo( v ) < 0) {
                swap(arr, j+1, i);
                j++;
            }
        }
        swap(arr, l, j);
        return j;
    }

    private static void swap(Object[] arr, int i, int j) {
        Object t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }

    public static void main(String[] args) {
        int N = 1000000;

        // 测试1 一般性测试
        System.out.println("Test for random array, size = " + N + " , random range [0, " + N + "]");

        Integer[] arr1 = SortTestHelper.generateRandomArray(N, 0, N);

        SortTestHelper.testSort("PlayWithAlgorithms.QuickSort", arr1);

        return;
    }
}
