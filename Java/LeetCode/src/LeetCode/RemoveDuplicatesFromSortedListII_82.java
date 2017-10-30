package LeetCode;

/**
 * Created by Lix on 2017/10/31.
 */
public class RemoveDuplicatesFromSortedListII_82 {

    /**
     * 自己的解法
     */
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null || head.next == null) return head;
        int oldValue = 99999999;
        while (head.val == head.next.val || head.val == oldValue) {
            if (head.next != null) {
                oldValue = head.val;
                head = head.next;
                if (head.next == null && head.val == oldValue) {
                    return null;
                }
                if (head.next == null) {
                    break;
                }
            } else {
                return null;
            }
        }

        head.next = deleteDuplicates(head.next);
        return head;
    }

    public ListNode deleteDuplicates1(ListNode head) {
        if (head == null) return null;
        if (head.next != null && head.val == head.next.val) {
            while (head.next != null && head.val == head.next.val) {
                head = head.next;
            }

            return deleteDuplicates1(head.next);
        } else {
            head.next = deleteDuplicates1(head.next);
        }

        return head;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        ListNode l2 = new ListNode(1);
//        ListNode l3 = new ListNode(1);
//        ListNode l4 = new ListNode(2);
//        ListNode l5 = new ListNode(3);
        l1.next = l2;
//        l2.next = l3;
//        l3.next = l4;
//        l4.next = l5;

        RemoveDuplicatesFromSortedListII_82 obj = new RemoveDuplicatesFromSortedListII_82();

        ListNode res = obj.deleteDuplicates(l1);
        System.out.println(res);
    }
}
