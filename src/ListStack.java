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

    public void push(Object value) throws Exception {
        if (isFull()) {
            throw new Exception("栈已满，没有空位");
        }
        header = new Node(value, header);
        elementCount++;
    }

    public Object pop() throws Exception {
        if (isEmpty()) {
            throw new Exception("空栈，没有可以返回的元素");
        }
        Object obj = header.getElement();
        header = header.next;
        elementCount--;
        return  obj;
    }

    public Object peak() throws Exception {
        if (isEmpty()) {
            throw new Exception("空栈");
        }
        return header.getElement();
    }
}
