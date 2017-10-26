package LeetCode;

/**
 * Created by Lix on 2017/10/26.
 */
public class AddTwoNumbers_2 {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {

    }

    private ListNode reverse(ListNode node) {
        ListNode pre = null;
        ListNode next = null;
        while (node != null) {
            next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }

        return node;
    }
}
