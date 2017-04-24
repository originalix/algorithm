
/**
 * Created by Leon on 17/4/24.
 */
public interface List {
    public boolean isEmpyty();
    public Object FindKth(int K, LinearList L);
    public int Find(Object obj, LinearList L);
    public void Insert(Object obj, int i, LinearList L);
    public void Delete(int i, LinearList L);
    public int Length(LinearList L);
}
