package LeetCode;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

/**
 * Created by Lix on 2017/10/12.
 */
public class FourSum_18 {
    public static List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);

        List<List<Integer>> res = new LinkedList<List<Integer>>();

        for (int i = 0; i < nums.length - 3; i++) {
            if (i != 0 && nums[i - 1] == nums[i]) {
                continue;
            }

            for (int j = i + 1; j < nums.length - 2; j++) {
                if ( j != i+1 && nums[j - 1] == nums[j] ) {
                    continue;
                }

                int lo = j + 1, hi = nums.length - 1;
                while (lo < hi) {
                    int sum = nums[i] + nums[j] + nums[lo] + nums[hi];
                    if (sum == target) {

                        List<Integer> answer = new LinkedList<Integer>();
                        answer.add(nums[i]);
                        answer.add(nums[j]);
                        answer.add(nums[lo]);
                        answer.add(nums[hi]);
                        res.add(answer);

                        lo++; hi--;
                        while (lo < hi && nums[lo] == nums[lo - 1]) {
                            lo++;
                        }

                        while (lo < hi && nums[hi] == nums[hi + 1]) {
                            hi--;
                        }
                    } else if (sum < target) {
                        lo++;
                    } else {
                        hi--;
                    }
                }
            }
        }
        return res;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{-3,-2,-1,0,0,1,2,3};
        List<List<Integer>> res = fourSum(nums, 0);
        for (int i = 0; i < res.size(); i++) {
            System.out.println(res.get(i));
        }
    }
}
