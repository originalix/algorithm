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

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        ListNode l2 = new ListNode(1);
        ListNode l3 = new ListNode(1);
        ListNode l4 = new ListNode(2);
        ListNode l5 = new ListNode(3);
        l1.next = l2; l2.next = l3; l3.next = l4; l4.next = l5;

        RemoveDuplicatesFromSortedListII_82 obj = new RemoveDuplicatesFromSortedListII_82();

        ListNode res = obj.deleteDuplicates(l1);
        System.out.println(res);
    }
}
