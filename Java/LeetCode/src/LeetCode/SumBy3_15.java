package LeetCode;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Lix on 2017/10/10.
 */
public class SumBy3_15 {
    // 思路：暴力解法
    public List<List<Integer>> threeSum(int[] nums) {
        int a = 0;
        int b = 1;
        int c = 2;

        List<List<Integer>> result = new ArrayList<List<Integer>>();

        for (int i = a; i < nums.length; i++) {
            for (int j = b; j < nums.length; j++) {
                for (int k = c; k < nums.length; k++) {
                    if (a + b + c == 0) {
                        List<Integer> answer = new ArrayList<Integer>();
                        answer.add(a);
                        answer.add(b);
                        answer.add(c);

                        result.add(answer);
                    }
                }
            }
        }

        return result;
    }
}
