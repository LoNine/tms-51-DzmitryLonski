class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);

        if (this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next
            }

            current.next = node;
        }
        this.length++
    }

    pop() {
        if (this.length <= 0) {
            return 'Linked list is empty!'
        }

        let current = this.head;
        let prev = null;

        while (current.next) {
            prev = current;
            current = current.next;
        }

        prev.next = null
        this.length--
        return current.value
    }
}
