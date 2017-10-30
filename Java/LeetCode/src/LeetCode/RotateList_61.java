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

    public ListNode findK(ListNode head, int k, int index) {
        if (head == null) return head;
        if (index == k) {
            head.next = null;
            return head;
        }
        index += 1;
        head = findK(head.next, k, index);
        return head;
    }

    public ListNode leftList(ListNode head, ListNode target) {
        while (head != null) {
            if (head.val == target.val) {
                return head;
            }

            head = head.next;
        }

        return null;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        ListNode l2 = new ListNode(2);
        ListNode l3 = new ListNode(3);
        l1.next = l2; l2.next = l3;

        RotateList_61 obj = new RotateList_61();

        // 查找k节点 倒序
        ListNode head = obj.reverseFor61(l1);
        head = obj.findK(head, 1, 1);

        System.out.println(head);

        // 组建左侧链表

        ListNode left = obj.leftList(l1, head);
        System.out.println(left);
    }
}
