package LeetCode;

/**
 * Created by Lix on 2017/10/27.
 */
public class RemoveNthNodeFromEndOfList_19 {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode reverse = reverseListFor19(head);
        ListNode node = reverse;

        int index = 1;
        while (reverse != null) {
            if (index + 1 == n) {
                reverse.next = reverse.next.next;
            }

            index += 1;
            reverse = reverse.next;
        }

        ListNode res = reverseListFor19(node.next);
        return res;
    }

    public ListNode reverseListFor19(ListNode head) {
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
