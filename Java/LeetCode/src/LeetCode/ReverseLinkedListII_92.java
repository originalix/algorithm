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
}
