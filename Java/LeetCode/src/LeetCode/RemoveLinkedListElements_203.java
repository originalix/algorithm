package LeetCode;

/**
 * Created by Lix on 2017/10/18.
 */
public class RemoveLinkedListElements_203 {

    // 递归解法
    public ListNode removeElements(ListNode head, int val) {
        if (head == null || head.next == null) return head;
        head.next = removeElements(head.next, val);
        return head.val == val ? head.next : head;
    }

    // 迭代解法 速度更快
    public ListNode removeElements1(ListNode head, int val) {
        while (head != null && head.val == val) head = head.next;
        ListNode curr = head;
        while (curr != null && curr.next != null)
            if (curr.next.val == val) curr.next = curr.next.next;
            else curr = curr.next;
        return head;
    }

}
