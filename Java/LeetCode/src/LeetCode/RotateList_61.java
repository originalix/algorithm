package LeetCode;

/**
 * Created by Lix on 2017/10/28.
 */
public class RotateList_61 {

    /**
     *
     * 初步思路:
     * 1、反转链表
     * 2、寻找k的节点
     * 3、反转k之前的节点
     * 4、反转k之后的链表，并在找到k之后，k.next 置为null
     * 5、拼接链表
     */
    public ListNode rotateRight(ListNode head, int k) {
        return null;
    }

    public ListNode reverseFor61(ListNode head) {
        ListNode pre = null;
        ListNode next = null;
        while (head != null) {
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }
        return pre;
    }
}
