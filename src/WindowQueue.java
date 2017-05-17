import com.sun.org.glassfish.external.amx.AMX;

/**
 * Created by Leon on 2017/5/17.
 */
//售票窗口
public class WindowQueue {
    // 卖票队列
    int maxSize = 10;
    CircleSequenceQueue queue = new CircleSequenceQueue(maxSize);
    int num = 0; //统计卖票的数量 一天最多卖100张票
    boolean isAlive = true; //判断是否继续卖票

    //排队买票
    public synchronized void producter() throws Exception {
        if (queue.count < maxSize) {
            queue.append(num++);
            System.out.println("第" + num + "顾客排队买票");
            this.notifyAll(); //唤醒卖票线程
        } else {
            try {
                System.out.println("队列已满...请等待!");
                this.wait();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    //卖票
    public synchronized void consumer() throws Exception {
        if (queue.count > 0) {
            Object obj = queue.delete();
            int temp = Integer.parseInt(obj.toString());
            System.out.println("第" + (temp + 1) + "个顾客买到票离开了队列");
            if (queue.isEmpty() && this.num >= 100) {
                this.isAlive = false;
            }
            this.notifyAll();
        } else {
            try {
                System.out.println("队列已空...请等待");
                this.wait();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

}

class WindowQueueTest {
    public static void main(String[] args) throws Exception {
        WindowQueue queue = new WindowQueue();
        Producer p = new Producer(queue);
        Consumer c = new Consumer(queue);

        Thread pThread = new Thread(p);
        Thread cThread = new Thread(c);

        pThread.start();
        cThread.start();
    }
}
