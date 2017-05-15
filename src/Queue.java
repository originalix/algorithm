/**
 * Created by Leon on 2017/5/16.
 */
public interface Queue {
    //入队
    public void append(Object obj) throws Exception;

    //出队
    public Object delete() throws Exception;

    //获取队头 元素
    public Object getFront() throws Exception;

    //是否为空队列
    public boolean isEmpty();
}
