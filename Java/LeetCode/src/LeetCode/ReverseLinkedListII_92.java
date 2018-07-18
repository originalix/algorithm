package LeetCode;

import java.sql.Statement;

/**
 * Created by Lix on 2017/11/3.
 */
public class ReverseLinkedListII_92 {
    public ListNode reverseBetween(ListNode head, int m, int n) {

        if (head == null ) return null;
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode pre = dummy;
        for (int i = 0; i < m - 1; i ++) pre = pre.next;

        ListNode start = pre.next;
        ListNode then = start.next;

        for (int i = 0; i < n - m; i++) {
            start.next = then.next;
            then.next = pre.next;
            pre.next = then;
            then = start.next;
        }

        return dummy.next;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        ListNode l2 = new ListNode(2);
        ListNode l3 = new ListNode(3);
        ListNode l4 = new ListNode(4);
        l1.next = l2;
        l2.next = l3;
//        l3.next = l4;

        ReverseLinkedListII_92 obj = new ReverseLinkedListII_92();
        ListNode res = obj.reverseBetween(l1, 2, 3);
        System.out.println(res);
    }
}
