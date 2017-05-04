public class LinearList implements List {
    final int defaultSize = 10;
    int maxSize;
    int size;
    Object[] listArray;

    public LinearList() {
        init(defaultSize);
    }

    public LinearList(int size) {
        init(size);
    }

    private void init(int size) {
        maxSize = size;
        this.size = 0;
        listArray = new Object[size];
    }

    public void insert(int index, Object obj) throws Exception {
        if (size == maxSize) {
            throw new Exception("顺序表已满，无法插入");
        }
        if (index < 0 || index > size) {
            throw new Exception("参数错误");
        }
        for (int j = size - 1; j >= index; j--) {
            listArray[j + 1] = listArray[j];
        }
        listArray[index] = obj;
        size++;
    }

    public void delete(int index, Object obj) throws Exception {
        if (isEmpty()) {
            throw new Exception("顺序表没有元素，无法删除");
        }
        if (index < 0 || index > size - 1) {
            throw new Exception("参数错误");
        }
        for (int j = index; j < size - 1; j++) {
            listArray[j] = listArray[j + 1];
        }
        size--;
    }

    public Object get(int index) throws Exception {
        if (index < 0 || index >= size) {
            throw new Exception("参数错误");
        }
        return listArray[index];
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public int size() {
        return size;
    }
}