/**
 * Created by Leon on 2017/5/19.
 */
public class LinkQueue {
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


}
