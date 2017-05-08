/**
 * Created by Leon on 2017/5/8.
 */
public class Stack {
    private Object[] elementData;
    private int size = 0;
    private int defaultSize = 10;

    public Stack() {
        init(defaultSize);
    }

    public Stack(int size) {
        init(size);
    }

    private void init(int size) {
        this.size = 0;
        this.elementData = new  Object[size];
    }

    public void push(Object obj) {

    }

    private void ensureCapacity() {
        if (elementData.length == size) {
            Object[] oldElements = elementData;
            int newLength = (int)(elementData.length * 1.5);
            elementData = new Object[newLength];
            System.arraycopy(oldElements, 0, elementData, 0, size);
        }
    }
}
