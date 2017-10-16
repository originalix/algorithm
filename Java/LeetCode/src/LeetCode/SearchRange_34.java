package LeetCode;

import java.util.LinkedList;
import java.util.List;

/**
 * Created by Lix on 2017/10/16.
 */
public class SearchRange_34 {
    public static int[] searchRange(int[] nums, int target) {
        List<Integer> res = new LinkedList<Integer>();

        int lo = 0, hi = nums.length - 1;
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if (nums[mid] == target) {
                res.add(mid);
                
                int oldMid = mid;

                while (mid - 1 >= lo && nums[mid-1] == target) {
                    mid -= 1;
                    res.add(mid);
                }

                mid = oldMid;

                while (mid + 1 <= hi &&  nums[mid+1] == target) {
                    mid += 1;
                    res.add(mid);
                }

                return res.stream().mapToInt(i -> i).toArray();

//                while (mid - 1 > lo && nums[mid - 1] < target) {
//                    lo = mid + 1;
//                    mid -= 1;
//                }
//
//                while (mid + 1 < hi && nums[mid + 1] > target) {
//                    hi = mid - 1;
//                    mid += 1;
//                }

            } else if (nums[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

//        if (res.size() <= 0) {
        return new int[]{-1, -1};
//        }
//
//        int[] array = res.stream().mapToInt(i -> i).toArray();
//
//        return array;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{5, 7, 7, 8, 8, 10};
        int[] a = searchRange(nums, 8);
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
    }
}
