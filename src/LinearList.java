import com.sun.org.apache.xml.internal.security.Init;

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
        this.size = size;
        listArray = new Object[size];
    }

    public boolean isEmpty() {
        return this.size == 0;
    }

    public Object FindKth(int K, LinearList L) {
        return null;
    }

    public int Find(Object obj, LinearList L) {
        return 0;
    }

    public void Insert(Object obj, int i, LinearList L) {

    }

    public void Delete(int i, LinearList L) {

    }

    public int Length(LinearList L) {
        return this.size;
    }
}
