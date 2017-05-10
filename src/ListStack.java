/**
 * Created by Leon on 2017/5/11.
 */
public class ListStack {
    Node header;
    int size;
    int elementCount;

    public ListStack() {
        header = null;
        elementCount = 0;
        size = 0;
    }

    public ListStack(int size) {
        header = null;
        elementCount = 0;
        this.size = size;
    }

    public void setHeader(Node header) {
        this.header = header;
    }

    public boolean isFull() {
        if (size == elementCount) {
            return true;
        }
        return false;
    }

    public boolean isEmpty() {
        if (elementCount == 0) {
            return true;
        }
        return false;
    }

}
