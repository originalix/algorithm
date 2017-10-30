package LeetCode;

/**
 * Created by Lix on 2017/10/31.
 */
public class RemoveDuplicatesFromSortedListII_82 {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) return head;
        while (head.val == head.next.val) {
            if (head.next.next != null) {
                head = head.next.next;
            } else {
                return null;
            }
        }

        head = deleteDuplicates(head.next);
        return head;
    }
}
