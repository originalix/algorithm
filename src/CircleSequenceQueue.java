/**
 * Created by Leon on 2017/5/16.
 */
public class CircleSequenceQueue {
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
}
