package LeetCode;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Lix on 2017/10/10.
 */
public class SumBy3_15 {
    // 思路：暴力解法
    public static List<List<Integer>> threeSum(int[] nums) {
        int a = 0;
        int b = 1;
        int c = 2;

        List<List<Integer>> result = new ArrayList<List<Integer>>();

        for (int i = 0; i < nums.length; i++) {
            for (int j = i+1; j < nums.length; j++) {
                for (int k = j+1; k < nums.length; k++) {

//                    System.out.println("now a = " + nums[i] + ", b = " + nums[j] + ", c = " + nums[k]);
                    if (nums[i] + nums[j] + nums[k] == 0) {

                        List<Integer> answer = new ArrayList<Integer>();
                        answer.add(nums[i]);
                        answer.add(nums[j]);
                        answer.add(nums[k]);

                        System.out.println("all answer : " + answer);

                        boolean isRepeat = false;
                        for (int e = 0; e < result.size(); e++) {
                            List<Integer> item = result.get(e);
                            boolean test = item.indexOf(nums[i]) == item.indexOf(nums[j]) && item.indexOf(nums[i]) == item.indexOf(nums[k]);

                            if ( item.contains(nums[i]) && item.contains(nums[j]) && item.contains(nums[k])) {
                                isRepeat = true;
                                if (test) {
                                    isRepeat = false;
                                }
                            }
                        }

                        if (!isRepeat) {
                            result.add(answer);
                        }
                    }
                }
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{0,0,0,0};
        List<List<Integer>> result = threeSum(nums);
        for (int i = 0; i < result.size(); i++) {
            System.out.println(result.get(i));
        }
    }
}
