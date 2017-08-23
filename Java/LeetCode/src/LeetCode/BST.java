package LeetCode;

/**
 * Created by Lix on 2017/8/23.
 */
public class BST<Key extends Comparable<Key>, Value> {
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

    private Node root;
    private int count;

    public BST() {
        root = null;
        count = 0;
    }

    public int size() {
        return count;
    }

    public boolean isEmpty() {
        return count == 0;
    }

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
}
