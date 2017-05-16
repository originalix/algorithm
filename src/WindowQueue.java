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

    }

    //卖票
    public synchronized void consumer() throws Exception {

    }

}
