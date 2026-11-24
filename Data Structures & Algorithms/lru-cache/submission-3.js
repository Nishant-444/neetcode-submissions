class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();

        // left = LRU, right = most recent
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

    insertAtRight(node) {
        let prev = this.right.prev;
        let next = this.right;

        prev.next = node;
        next.prev = node;

        node.next = next;
        node.prev = prev;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
            this.insertAtRight(this.cache.get(key));
            return this.cache.get(key).value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }

        let node = new Node(key, value);

        this.cache.set(key, node);
        this.insertAtRight(node);

        if (this.cache.size > this.capacity) {
            let lru = this.left.next;

            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
