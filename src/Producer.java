/**
 * Created by Leon on 2017/5/17.
 */

//买票者
public class Producer {
    WindowQueue queue;

    public Producer(WindowQueue queue) {
        this.queue = queue;
    }

    public void run() {
        while (queue.num < 100) {
            try {
                queue.producter();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
