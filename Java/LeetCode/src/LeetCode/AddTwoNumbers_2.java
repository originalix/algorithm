package LeetCode;

/**
 * Created by Lix on 2017/10/26.
 */
public class AddTwoNumbers_2 {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode temp1 = reverse(l1);
        ListNode temp2 = reverse(l2);

        while (temp1 != null) {
            System.out.println("val = " + temp1.val);
            temp1 = temp1.next;
        }
        return temp1;
    }

    public void testReversr(ListNode l1) {
        ListNode temp1 = reverse(l1);

        while (temp1 != null) {
            System.out.println("val = " + temp1.val);
            temp1 = temp1.next;
        }
    }

    private ListNode reverse(ListNode node) {
        ListNode pre = null;
        ListNode next = null;
        while (node != null) {
            next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }

        return node;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(3);
        ListNode l2 = new ListNode(2);
        ListNode l3 = new ListNode(1);
        l1.next = l2;
        l2.next = l3;
        l3.next = null;

        AddTwoNumbers_2 obj = new AddTwoNumbers_2();
        obj.testReversr(l1);
    }
}
