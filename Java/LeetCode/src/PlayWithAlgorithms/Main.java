package PlayWithAlgorithms;

import LeetCode.BST;

import java.util.Arrays;

/**
 * Created by Lix on 2017/8/17.
 */
public class Main {
    public static void main(String[] args) {
        BST<Integer, Integer> bst = new BST<Integer, Integer>();

        // 取n个取值范围在[0...M)的随机数放进二分搜索树中
        int N = 100;
        int M = 100;
        for (int i = 0; i < N; i++) {
            Integer key = new Integer((int) (Math.random() * M));
            bst.insert(key, key);
        }

        System.out.println("now tree size is : " + bst.size());

        System.out.println("Test removeMin: ");

        while( !bst.isEmpty() ){
            System.out.print("min: " + bst.minimum() + " , ");
            bst.removeMin();
            System.out.println("After removeMin, size = " + bst.size() );
        }

        System.out.println();
    }
}
