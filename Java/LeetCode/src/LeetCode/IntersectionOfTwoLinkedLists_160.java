package LeetCode;

/**
 * Created by Lix on 2017/10/17.
 */
public class IntersectionOfTwoLinkedLists_160 {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        int lenA = length(headA); int lenB = length(headB);
        while (lenA > lenB) {
            headA = headA.next;
            lenA --;
        }

        while (lenA < lenB) {
            headB = headB.next;
            lenB --;
        }

        while (headA != headB) {
            headA = headA.next;
            headB = headB.next;
        }

        return headA;
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
