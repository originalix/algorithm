package LeetCode;

/**
 * Created by Lix on 2017/10/24.
 */
public class DeleteNodeInALinkedList_237 {
    public void deleteNode(ListNode node) {
        if (node.next == null) {
            node = null;
        } else {
            node.val = node.next.val;
            node.next = node.next.next;
        }
    }
}
