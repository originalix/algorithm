package LeetCode;

import java.util.List;
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

    public ListNode reverseList1(ListNode head) {
        if (head == null || head.next == null) return head;
        ListNode nextNode = head.next;
        ListNode newHead = reverseList1(nextNode);
        nextNode.next = head;
        head.next = null;
        return newHead;
    }
}
