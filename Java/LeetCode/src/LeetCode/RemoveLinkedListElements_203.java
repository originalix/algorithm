package LeetCode;

/**
 * Created by Lix on 2017/10/18.
 */
public class RemoveLinkedListElements_203 {
    public ListNode removeElements(ListNode head, int val) {
        if (head == null || head.next == null) return head;
        head.next = removeElements(head.next, val);
        return head.val == val ? head.next : head;
    }

}
