package LeetCode;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

/**
 * Created by Lix on 2017/10/16.
 */
public class SearchRange_34 {
    public static int[] searchRange(int[] nums, int target) {
        List<Integer> res = new LinkedList<Integer>();

        if (nums.length < 1) {
            return new int[]{-1, -1};
        }

        int lo = 0, hi = nums.length - 1;
        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            if (nums[mid] == target) {
                res.add(0, mid);
                res.add(1, mid);

                int oldMid = mid;

                while (mid - 1 >= lo && nums[mid-1] == target) {
                    mid -= 1;
                    res.remove(0);
                    res.add(0, mid);
                }

                mid = oldMid;

                while (mid + 1 <= hi &&  nums[mid+1] == target) {
                    mid += 1;
                    res.remove(1);
                    res.add(1, mid);
                }

                int[] resArray = res.stream().mapToInt(i -> i).toArray();
//                Arrays.sort(resArray);
                return resArray;

            } else if (nums[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return new int[]{-1, -1};
    }

    public static void main(String[] args) {
        int[] nums = new int[]{2,2};
        int[] a = searchRange(nums, 2);
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
    }
}
