package LeetCode;

/**
 * Created by Lix on 2017/10/24.
 */
public class SwapNodesInPairs_24 {
    public ListNode swapPairs(ListNode head) {
        ListNode temp = null;
        while (head != null) {
            ListNode a = head;
            ListNode b = a.next;
            if (b == null) {
                break;
            }
            ListNode T = b.next;
            ListNode T1 = a;
            a = b;
            b = T1;
            b.next = a;
            a.next = T;
            temp = b;
            head = head.next.next;
        }
        return temp;
    }
}
