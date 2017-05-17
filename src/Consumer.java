/**
 * Created by Leon on 2017/5/17.
 */

//卖票者
public class Consumer {

    WindowQueue queue;

    public Consumer(WindowQueue queue) {
        this.queue = queue;
    }

    public void run() {
        while (queue.isAlive) {
            try {
                queue.consumer();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
