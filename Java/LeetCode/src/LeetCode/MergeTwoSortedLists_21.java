package LeetCode;

import javax.sound.sampled.Line;
import java.util.LinkedList;
import java.util.List;

/**
 * Created by Lix on 2017/10/16.
 */
public class MergeTwoSortedLists_21 {

    private static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    // 思路： 递归求解
    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;

        if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }

    public static void main(String[] args) {

    }

}
