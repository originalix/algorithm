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

public class LinkList {

}
