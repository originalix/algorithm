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

    @Override
    public void insert(int index, Object obj) throws Exception {
    }

    @Override
    public void delete(int index, Object obj) throws Exception {

    }

    @Override
    public Object get(int index) throws Exception {
        return null;
    }

    @Override
    public int size() {
        return 0;
    }

    @Override
    public boolean isEmpty() {
        return false;
    }
}
