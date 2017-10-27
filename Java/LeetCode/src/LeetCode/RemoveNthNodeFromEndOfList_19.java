package LeetCode;

/**
 * Created by Lix on 2017/10/27.
 */
public class RemoveNthNodeFromEndOfList_19 {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode reverse = reverseListFor19(head);
        ListNode current = deleteNode(reverse, n, 1);
        ListNode reverseRes = reverseListFor19(current);
        return reverseRes;
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

    public ListNode deleteNode(ListNode head, int n, int index) {
        if (head == null) return head;
        if (n == index) {
            return head.next;
        }
        index += 1;
        head.next = deleteNode(head.next, n, index);
        return head;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        ListNode l2 = new ListNode(2);
        ListNode l3 = new ListNode(3);
        l1.next = l2;
        l2.next = l3;

        RemoveNthNodeFromEndOfList_19 obj = new RemoveNthNodeFromEndOfList_19();
        ListNode res = obj.removeNthFromEnd(l1, 2);
        System.out.println(res);
    }
}
