package LeetCode;

public class PartitionList_86 {
    public ListNode partition(ListNode head, int x) {
        ListNode dummy1 = new ListNode(0), dummy2 = new ListNode(0);
        ListNode curr1 = dummy1, curr2 = dummy2;
        while (head != null) {
            if (head.val < x) {
                curr1.next = head;
                curr1 = head;
            } else {
                curr2.next = head;
                curr2 = head;
            }

            head = head.next;
        }

        curr2.next = null;
        curr1.next = dummy2.next;
        return dummy1.next;
    }
}
