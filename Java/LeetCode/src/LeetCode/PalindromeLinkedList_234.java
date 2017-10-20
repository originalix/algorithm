package LeetCode;

/**
 * Created by Lix on 2017/10/20.
 */
public class PalindromeLinkedList_234 {
    public boolean isPalindrome(ListNode head) {
        ListNode faster = head;
        ListNode slower = head;

        while (faster.next != null && faster.next.next != null) {
            faster = faster.next.next;
            slower = slower.next;
        }

        if (slower != null) {
            slower = slower.next;
        }

        slower = reverse(slower);
        faster = head;

        while (slower != null) {
            if (slower.val != faster.val) {
                return false;
            }
            slower = slower.next;
            faster = faster.next;
        }

        return true;
    }

    public ListNode reverse(ListNode head) {
        ListNode pre = null;
        ListNode next = null;
        while (head != null) {
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }

        return pre;
    }
}
