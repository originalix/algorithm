package LeetCode;

import java.util.List;

/**
 * Created by Lix on 2017/10/16.
 */
public class MergeTwoSortedLists_21 {

    // 思路： 合并两个链表
    // 暴力解法 时间复杂度O(n^2)
    // 循环比较
    private static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode l2NextNode = l2.next;
//        ListNode l1NextNode = l1.next;
        while (l2NextNode != null) {
//            while (l1NextNode != null) {
//                if (l1NextNode.val <= l2NextNode.val) {
//                    ListNode temp1 = l1NextNode;
//                    ListNode temp2 = l2NextNode.next;
//                    l1NextNode = l2NextNode;
//                    l1NextNode.next = temp1;
//                } else {
//                    ListNode temp1 = l1NextNode.next;
//                    ListNode temp2 = l2NextNode.next;
//                    l1NextNode.next = l2NextNode;
//                    l2NextNode.next = temp1;
//                }
//            }

            System.out.println("now val = " + l2NextNode.val);
            l2NextNode = l2NextNode.next;
        }
        return null;
    }

    public static void main(String[] args) {
        ListNode list = new ListNode(0);

        for (int i = 0; i < 10; i++) {
            ListNode random = new ListNode((int) (Math.random() % 100));
            list.next = random;
        }

        mergeTwoLists(null, list);
    }

}
