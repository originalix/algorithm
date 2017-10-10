package LeetCode;

import com.sun.tools.hat.internal.util.ArraySorter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by Lix on 2017/10/10.
 */
public class SumBy3_15 {
    // 思路：暴力解法
    public static List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        System.out.println("nums = " + nums);

        return null;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{-1, 0, 1, 2, -1, -4};
        List<List<Integer>> result = threeSum(nums);
        for (int i = 0; i < result.size(); i++) {
            System.out.println(result.get(i));
        }
    }
}
