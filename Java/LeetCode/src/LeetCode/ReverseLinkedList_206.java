package LeetCode;

import java.util.Stack;

/**
 * Created by Lix on 2017/10/19.
 */
public class ReverseLinkedList_206 {
    public ListNode reverseList(ListNode head) {

        ListNode next = null;
        ListNode pre = null;

        while (head != null) {
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }

        return pre;
    }
}
