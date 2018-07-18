package LeetCode;

/**
 * Created by Lix on 2017/10/17.
 */
public class LinkedListCycle_141 {
    public boolean hasCycle(ListNode head) {
        if (head == null) return false;

        ListNode walker = head;
        ListNode runner = head;

        while (walker.next != null && runner.next.next != null) {
            walker = walker.next;
            runner = runner.next.next;
            if (walker == runner) return true;
        }

        return false;
    }
}
