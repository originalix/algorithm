package LeetCode;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

/**
 * Created by Lix on 2017/10/12.
 */
public class SearchRotatedSortedArray_33 {
    public int search(int[] nums, int target) {
        int resIndex = -1;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                resIndex = i;
            }
        }

        return resIndex;
    }
}
