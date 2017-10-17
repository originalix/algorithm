package LeetCode;

/**
 * Created by Lix on 2017/10/17.
 */
public class IntersectionOfTwoLinkedLists_160 {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        return null;
    }

    public int length(ListNode head) {
        int length = 0;
        while (head != null) {
            head = head.next;
            length++;
        }

        return length;
    }
}
