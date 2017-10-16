package LeetCode;

/**
 * Created by Lix on 2017/10/17.
 */
public class RemoveDuplicatesFromSortedList_83 {
    public ListNode deleteDuplicates(ListNode head) {

    }

    public ListNode deleteDuplicates(ListNode node, int target) {

        if (node == null) return node;

        if (node.val != target) {
            return node;
        }

        node.next = deleteDuplicates(node.next, node.val);

        return node;
    }
}
