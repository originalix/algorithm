/**
 * Created by Leon on 2017/5/19.
 */
public class LinkQueue implements Queue {
    Node front;
    Node rear;
    int count;

    public LinkQueue() {
        init();
    }

    private void init() {
        front = rear = null;
        count = 0;
    }

    @Override
    public void append(Object obj) throws Exception {
        Node node = new Node(obj, null);

        //如果当前队列不空
        if (rear != null) {
            rear.next = node; //队尾节点指向新节点
        }

        rear = node; //设置队尾节点为新节点

        //说明要插入的节点是队列的第一个节点
        if (front == null) {
            front = node;
        }

        count++;
    }

    @Override
    public Object delete() throws Exception {
        if (isEmpty()) {
            throw new Exception("队列已空，没有元素");
        }

        Node node = front;
        front = front.next;
        count--;
        return node.getElement();
    }

    @Override
    public Object getFront() throws Exception {
        if (!isEmpty()) {
            return front.getElement();
        } else {
            return null;
        }
    }

    @Override
    public boolean isEmpty() {
        return count == 0;
    }
}

class TestLinkQueue {
    public static void main(String[] args) throws Exception {
        LinkQueue queue = new LinkQueue();
        queue.append("a");
        queue.append("b");
        queue.append("c");
        queue.append("d");
        queue.append("e");
        queue.append("f");

        queue.delete();
        queue.delete();

        queue.append("g");

        while (!queue.isEmpty()) {
            System.out.println(queue.delete());
        }
    }
}