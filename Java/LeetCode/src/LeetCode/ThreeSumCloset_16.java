package LeetCode;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

/**
 * Created by Lix on 2017/10/11.
 */
public class ThreeSumCloset_16 {
    public static int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);

        int cloestRes = 999999999;

        for (int i = 0; i < nums.length - 2; i++) {

            int lo = i+1, hi = nums.length - 1, sum = target - nums[i];
            while (lo < hi) {
                if ( Math.abs(nums[lo] + nums[hi] + nums[i] - target) <= Math.abs(target - cloestRes) ) {
                    cloestRes = nums[lo] + nums[hi] + nums[i];
                }
                if (nums[lo] + nums[hi] == sum) {
                    return target;
                } else if (nums[lo] + nums[hi] < sum) {
                    lo++;
                } else {
                    hi--;
                }
            }
        }

        return cloestRes;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{-1 ,2 ,1 ,-4};
        int cloest = threeSumClosest(nums, 1);
        System.out.println("cloest is : " + cloest);
    }
}