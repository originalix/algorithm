/**
 * Created by Leon on 2017/5/16.
 */
public class CircleSequenceQueue implements Queue {
    static final int defaultSize = 10; //队列默认长度
    int front; //队头
    int rear; //队尾
    int count; //统计元素个数的技术器
    int maxSize; //队列最大长度
    Object[] queue; //队列

    public CircleSequenceQueue() {
        init(defaultSize);
    }

    public CircleSequenceQueue(int size) {
        init(size);
    }

    private void init(int size) {
        maxSize = size;
        front = rear = 0;
        count = 0;
        queue = new Object[size];
    }

    @Override
    public void append(Object obj) throws Exception {
        if (count > 0 && front == rear) {
            throw new Exception("队列已满!");
        }
        queue[rear] = obj;
        rear = (rear + 1) % maxSize;
        count++;
    }

    @Override
    public Object delete() throws Exception {
        if (isEmpty()) {
            throw new Exception("空队列！");
        }
        Object obj = queue[front];
        front = (front + 1) % maxSize;
        count--;
        return obj;
    }

    @Override
    public Object getFront() throws Exception {
        if (!isEmpty()) {
            return queue[front];
        } else {
            return null;
        }
    }

    @Override
    public boolean isEmpty() {
        return count == 0;
    }
}

class CircleSequenceQueueTest {
    public static void main(String[] args) throws Exception {
        CircleSequenceQueue queue = new CircleSequenceQueue();
        queue.append("a");
        queue.append("b");
        queue.append("c");
        queue.append("d");
        queue.append("e");
        queue.append("f");
        queue.append("g");
        queue.append("h");

        queue.delete();
        queue.delete();

        queue.append("i");

        while (!queue.isEmpty()) {
            System.out.println(queue.delete());
        }
    }
}