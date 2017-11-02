package LeetCode;

/**
 * Created by Lix on 2017/11/3.
 */
public class ReverseLinkedListII_92 {
    public ListNode reverseBetween(ListNode head, int m, int n) {

        ListNode dummy = new ListNode(0);
        dummy.next = head;
        int index = 0;
        while (head != null) {
            index += 1;
            System.out.println("head value = " + head.val + ", index = " + index);

            ListNode pre = null, next = null;
            ListNode cur = head;

            while (index >= m && index <= n) {
                next = cur.next;
                cur.next = pre;
                pre = cur;
                cur = next;
                index += 1;
            }
            if (pre != null) {
                head = pre;
            }
            head = head.next;
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
        l3.next = l4;

        ReverseLinkedListII_92 obj = new ReverseLinkedListII_92();
        ListNode res = obj.reverseBetween(l1, 2, 3);
        System.out.println(res);
    }
}
