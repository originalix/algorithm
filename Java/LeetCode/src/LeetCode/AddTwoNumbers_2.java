package LeetCode;

/**
 * Created by Lix on 2017/10/26.
 */
public class AddTwoNumbers_2 {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        return l1;
    }

    public void testReversr(ListNode l1) {
        int temp1 = calculateSum(l1);
        System.out.println("now sum = " + temp1);
        Integer n = temp1;
        String str = n.toString();
        System.out.println("integer to string + " + str);
        for (int i = 0; i < str.length(); i++) {
            String subStr = str.substring(i, i+1);
            System.out.println(subStr);
        }
    }

    private int calculateSum(ListNode node) {
        ListNode pre = null;
        ListNode next = null;

        int index = 0;
        int sum = 0;

        while (node != null) {
            next = node.next;
            node.next = pre;
            pre = node;
            sum += (node.val * Math.pow(10, index));
            index += 1;
            node = next;
        }

        return sum;
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
