package LeetCode;

/**
 * Created by Lix on 2017/8/23.
 */

// 二分搜索树
// 由于Key需要能够进行比较，所以需要extends Comparable<Key>
public class BST<Key extends Comparable<Key>, Value> {

    // 树中的节点为私有的类, 外界不需要了解二分搜索树节点的具体实现
    private class Node {
        private Key key;
        private Value value;
        private Node left;
        private Node right;

        Node(Key key, Value value) {
            this.key = key;
            this.value = value;
            this.left = this.right = null;
        }
    }

    private Node root;  // 根节点
    private int count;  // 树种的节点个数

    // 构造函数, 默认构造一棵空二分搜索树
    public BST() {
        root = null;
        count = 0;
    }

    // 返回二分搜索树的节点个数
    public int size() {
        return count;
    }

    // 返回二分搜索树是否为空
    public boolean isEmpty() {
        return count == 0;
    }

    // 向二分搜索树中插入一个新的(key, value)数据对
    public void insert(Key key, Value value) {
        root = insert(root, key, value);
    }

    private Node insert(Node node, Key key, Value value) {
        if (node == null) {
            count++;
            return new Node(key, value);
        }

        if (key.compareTo(node.key) == 0) {
            node.value = value;
        } else if (key.compareTo(node.key) < 0) {
            node.left = insert(node.left, key, value);
        } else {
            node.right = insert(node.right, key, value);
        }

        return node;
    }

    // 查看二分搜索树中是否存在键key
    public boolean contain(Key key) {
        return contain(root, key);
    }

    private boolean contain(Node node, Key key) {
        if (node == null) {
            return false;
        }

        if (key.compareTo(node.key) == 0) {
            return true;
        } else if (key.compareTo(node.key) < 0) {
            return contain(node.left, key);
        } else {
            return contain(node.right, key);
        }
    }

    // 在二分搜索树中搜索键key所对应的值。如果这个值不存在, 则返回null
    public Value search(Key key) throws Exception {
        Value value =  search(root, key);
        if (value == null) {
            throw new Exception("找不到value");
        }
        return value;
    }

    private Value search(Node node, Key key) {
        if (node == null) {
            return null;
        }

        if (key.compareTo(node.key) == 0) {
            return node.value;
        } else if (key.compareTo(node.key) < 0) {
            return search(node.left, key);
        } else {
            return search(node.right, key);
        }
    }

    // 二分搜索树的前序遍历
    public void preOrder() {
        preOrder(root);
    }

    private void preOrder(Node node) {
        if (node != null) {
            System.out.print(node.key + " ");
            preOrder(node.left);
            preOrder(node.right);
        }
    }

    // 二分搜索树的中序遍历
    public void inOrder() {
        inOrder(root);
    }

    private void inOrder(Node node) {
        if (node != null) {
            inOrder(node.left);
            System.out.print(node.key + " ");
            inOrder(node.right);
        }
    }

    // 二分搜索树的后序遍历
    public void postOrder() {
        postOrder(root);
    }

    private void postOrder(Node node) {
        if (node != null) {
            postOrder(node.left);
            postOrder(node.right);
            System.out.print(node.key + " ");
        }
    }

    // 寻找二分搜索树的最小的键值
    public Key minimum() {
        assert count != 0;
        Node minNode = minimum(root);
        return minNode.key;
    }

    private Node minimum(Node node) {
        if (node.left == null) {
            return node;
        }
        return minimum(node.left);
    }

    // 寻找二分搜索树的最大的键值
    public Key maximum() {
        assert count != 0;
        Node maxNode = maximum(root);
        return maxNode.key;
    }

    private Node maximum(Node node) {
        if (node.right == null) {
            return node;
        }
        return maximum(node.right);
    }

    // 从二分搜索树中删除最小值所在节点
    public void removeMin() {
        if (root != null) {
            root = removeMin(root);
        }
    }

    private Node removeMin(Node node) {
        if (node.left == null) {
            Node rightNode = node.right;
            count--;
            return rightNode;
        }
        node.left = removeMin(node.left);
        return node;
    }
}
