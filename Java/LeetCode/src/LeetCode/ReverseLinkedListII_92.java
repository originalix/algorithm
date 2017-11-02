package LeetCode;

/**
 * Created by Lix on 2017/11/3.
 */
public class ReverseLinkedListII_92 {
    public ListNode reverseBetween(ListNode head, int m, int n) {
        int index = 1;
        while (head != null) {
            System.out.println("head value = " + head.val + ", index = " + index);
            index += 1;
            head = head.next;
        }

        return head;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        ListNode l2 = new ListNode(2);
        ListNode l3 = new ListNode(3);
        ListNode l4 = new ListNode(4);
        l1.next = l2;
        l2.next = l3;
        l3.next = l4;

        ReverseLinkedListII_92 obj = new ReverseLinkedListII_92();
        obj.reverseBetween(l1, 0, 0);
    }
}
