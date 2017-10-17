package LeetCode;

import java.lang.annotation.Target;

/**
 * Created by Lix on 2017/10/17.
 */
public class RemoveDuplicatesFromSortedList_83 {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) return head;
        head.next = deleteDuplicates(head.next, head.val);
        return head;
    }

    public ListNode deleteDuplicates(ListNode node, int val) {

        if (node == null) return node;
        if (node.next != null) {
            node.next = deleteDuplicates(node.next, node.val);
            return node;
        }

        if (node.val != val) return node;
    }
}
