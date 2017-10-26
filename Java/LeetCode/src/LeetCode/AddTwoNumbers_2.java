package LeetCode;

/**
 * Created by Lix on 2017/10/26.
 */
public class AddTwoNumbers_2 {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int temp1 = calculateSum(l1);
        int temp2 = calculateSum(l2);
        Integer sum = temp1 + temp2;
        String string = sum.toString();

        System.out.println("integer to string + " + string);
        ListNode res = null;
        for (int i = 0; i < string.length(); i++) {
            String subStr = string.substring(i, i+1);
            int val = Integer.valueOf(subStr);
            res.val = val;
            res = res.next;
        }

        return res;
    }

    public void testReversr(ListNode l1) {
        int temp1 = calculateSum(l1);
        System.out.println("now sum = " + temp1);

        Integer sum = temp1;
        String string = sum.toString();

        System.out.println("integer to string + " + string);

        ListNode res = null;
        if (string.length() > 1) {
            int first = Integer.valueOf(string.substring(0, 1));
            res = new ListNode(first);
            for (int i = 1; i < string.length(); i++) {
                String subStr = string.substring(i, i+1);
                int val = Integer.valueOf(subStr);
                ListNode tmp = new ListNode(val);

                res.next = tmp;
                res = res.next;
            }

        } else {
//            return res;
        }

//        for (int i = 0; i < string.length() - 1; i++) {
//            String subStr1 = string.substring(i, i+1);
//            String subStr2 = string.substring(i+1, i+2);
//
//            int val1 = Integer.valueOf(subStr1);
//            int val2 = Integer.valueOf(subStr2);
//
//            System.out.print("str[" + i + "] = " + val1 + ", ");
//            System.out.print("str[" + i + "] = " + val2 + ", ");
//            res = new ListNode(val1);
//            tmp = new ListNode(val2);
//            tmp.next = res;
//
//        }
//
//        System.out.println(res);
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
