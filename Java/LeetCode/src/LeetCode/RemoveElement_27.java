package LeetCode;

import javafx.scene.shape.VLineTo;

/**
 * Created by Lix on 2017/9/29.
 */
public class RemoveElement_27 {
    public int removeElement(int[] nums, int val) {
        int elementCount = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == val) {
                elementCount += 1;
            }
        }

        if (elementCount == 0) {

        }
    }
}
