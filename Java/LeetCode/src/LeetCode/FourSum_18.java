package LeetCode;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

/**
 * Created by Lix on 2017/10/12.
 */
public class FourSum_18 {
    public List<List<Integer>> fourSum(int[] nums, int target) {
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

                int lo = j + 1, hi = nums.length - 1, sum = target - nums[j];
                while (lo < hi) {
                    if (nums[lo] + nums[hi] == sum) {

                        List<Integer> answer = new LinkedList<Integer>();
                        answer.add(nums[i]);
                        answer.add(nums[j]);
                        answer.add(nums[lo]);
                        answer.add(nums[hi]);
                        res.add(answer);

                        while (lo < hi && nums[lo] == nums[lo++]) {
                            lo++;
                        }

                        while (lo < hi && nums[hi] == nums[hi--]) {
                            hi--;
                        }
                        lo++; hi--;
                    } else if (nums[lo] + nums[hi] < sum) {
                        lo++;
                    } else {
                        hi--;
                    }
                }
            }
        }
        return res;
    }
}
