/**
 * Created by Leon on 2017/5/5.
 */
class Node {
    Object element; //数据域
    Node next; //指针域

    //头结点的构造方法
    public Node(Node nextval) {
        this.next = nextval;
    }

    //非头结点的构造方法
    public Node(Object obj, Node nextval) {
        this.element = obj;
        this.next = nextval;
    }

    //获得当前节点的指针域
    public Node getNext() {
        return this.next;
    }

    //获得当前节点的数据域
    public Object getElement() {
        return this.element;
    }

    //设置当前节点的指针域
    public void setNext(Node nextval) {
        this.next = nextval;
    }

    //设置当前节点的数据域
    public void setElement(Object obj) {
        this.element = obj;
    }

    public String toString() {
        return this.element.toString();
    }
}

public class LinkList implements List {

    Node head; //头指针
    Node current; //当前节点
    int size; //节点个数

    //初始化一个空链表
    public LinkList() {
        this.head = this.current = new Node(null);
        this.size = 0;
    }

    //定位函数，也就是让当前节点定位到要操作节点的前一个节点
    //比如要修改a2节点，就把当前节点定位到a1节点，然后修改a1节点的指针域
    public void index(int index) throws Exception {
        if (index < -1 || index > size - 1) {
            throw new Exception("参数错误");
        }

        //说明在头结点之后操作
        if (index == -1) {
            return;
        }

        current = head.next;
        int j = 0;
        while (current != null && j < index) {
            current = current.next;
            j++;
        }
    }

    @Override
    public void insert(int index, Object obj) throws Exception {
        if (index < 0 || index > size) {
            throw new Exception("参数错误!");
        }
        index(index - 1); //定位节点到要操作的前一个节点
        current.setNext(new Node(obj, current.next));
        size++;
    }

    @Override
    public void delete(int index) throws Exception {
        if (isEmpty()) {
            throw new Exception("链表为空，无法删除");
        }
        if (index < 0 || index > size) {
            throw new Exception("参数错误");
        }
        index(index - 1);
        current.setNext(current.next.next);
        size--;
    }

    @Override
    public Object get(int index) throws Exception {
        if (index < -1 || index > size - 1) {
            throw new Exception("参数非法");
        }
        index(index);
        return current.getElement();
    }

    @Override
    public int size() {
        return this.size;
    }

    @Override
    public boolean isEmpty() {
        return size == 0;
    }
}

class LinkListTest {
    public static void main(String[] args) throws Exception {
        LinkList list = new LinkList();
        for (int i = 0; i < 10; i++) {
            int temp = (int)(Math.random() * 100);
            list.insert(i, temp);
            System.out.println(temp + " ");
        }

        list.delete(4);
        System.out.println("\n-----删除了第五个元素后-----");
        for (int i = 0; i < list.size; i++) {
            System.out.println(list.get(i) + " ");
        }
    }
}