package LeetCode;

/**
 * Created by Lix on 2017/10/19.
 */
public class ReverseLinkedList_206 {
    public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) return head;
        head = reverseList(head.next);
        return head;
    }
}
