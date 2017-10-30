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
     *
     * result： 未完成
     *
     * 之后思路：
     *
     * 将链表连成一个环
     * The basic idea is to link the tail of the list with the head, make it a cycle. Then count to the rotate point and cut it.
     */
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null) return head;

        ListNode copyNode = head;

        int len = 1;
        while (copyNode.next != null) {
            copyNode = copyNode.next;
            len++;
        }

        copyNode.next = head;

        for (int i = len - k % len; i > 1; i--) {
            head = head.next;
        }

        copyNode = head.next;
        head.next = null;
        return copyNode;
    }


    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        ListNode l2 = new ListNode(2);
        ListNode l3 = new ListNode(3);
        l1.next = l2; l2.next = l3;

        RotateList_61 obj = new RotateList_61();
        ListNode head = obj.rotateRight(l1, 1);

        System.out.println(head);
    }
}
