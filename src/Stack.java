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
        ensureCapacity();
        elementData[size++] = obj;
    }

    public Object pop() throws Exception {
        if (size == 0) {
            throw new Exception("取出数据错误，空栈");
        }
        return elementData[--size];
    }

    public int size() {
        return size;
    }

    private void ensureCapacity() {
        if (elementData.length == size) {
            Object[] oldElements = elementData;
            int newLength = (int)(elementData.length * 1.5);
            elementData = new Object[newLength];
            System.arraycopy(oldElements, 0, elementData, 0, size);
        }
    }

    //入栈出栈测试
    public static void main(String[] args) {
        Stack stack = new Stack();
        for (int i = 0; i < 10; i++) {
            stack.push("元素 " + i);
            System.out.println("元素 " + i + "入栈");
        }

        try {
            for (int i = 0; i < 10; i++) {
                System.out.println(stack.pop() + "出栈");
            }
        } catch (Exception error) {
            error.printStackTrace();
        }
    }
}
