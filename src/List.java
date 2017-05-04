public interface List {
    //获取线性表长度
    public int size();
    //获取线性表是否为空
    public boolean isEmpty();
    //插入元素
    public void insert(int index, Object obj) throws Exception;
    //删除元素
    public void delete(int index, Object obj) throws Exception;
    //获取指定位置元素
    public Object get(int index) throws Exception;
}