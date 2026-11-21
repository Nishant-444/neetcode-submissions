
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map();

        this.left = new Node(0, 0);
        this.right = new Node(0, 0);

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node) {
        let prev = node.prev;
        let next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    insert(node) {
        let prev = this.right.prev;
        let next = this.right;

        prev.next = node;
        next.prev = node;

        node.next = next;
        node.prev = prev;
    }

    get(key) {
        if (this.cache.has(key)) {
            let node = this.cache.get(key);

            this.remove(node);
            this.insert(node);

            return node.val;
        }

        return -1;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }

        let node = new Node(key, value);
        this.cache.set(key, node);
        this.insert(node);

        if (this.cache.size > this.cap) {
            let lru = this.left.next;

            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
