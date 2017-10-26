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

            if (index == n) {
                reverse = reverse.next;
                break;
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

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        ListNode l2 = new ListNode(2);
//        ListNode l3 = new ListNode(3);
        l1.next = l2;
//        l2.next = l3;

        RemoveNthNodeFromEndOfList_19 obj = new RemoveNthNodeFromEndOfList_19();
        ListNode res = obj.removeNthFromEnd(l1, 1);
        System.out.println(res);
    }
}
