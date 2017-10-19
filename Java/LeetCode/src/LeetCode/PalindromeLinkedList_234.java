package LeetCode;

/**
 * Created by Lix on 2017/10/20.
 */
public class PalindromeLinkedList_234 {
    public boolean isPalindrome(ListNode head) {
        ListNode next = null;
        ListNode pre = null;
        ListNode temp = head;

        while (head != null) {
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }

        while (temp != null) {
            if (temp.val != pre.val) {
                return false;
            }
            temp = temp.next;
        }

        return true;

    }
}
