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

    add(position, value) {
        if (position < 0 || position > this.length) {
            return 'Incorrect position value';
        }

        let node = new Node(value);

        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let prev = null;
            let index = 0;

            while(index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = node;
            node.next = current;
        }
        this.length++
    }

    toArray() {
        let array = [];
        let current = this.head;

        while(current) {
            array.push(current.value);
            current = current.next;
        }

        return array
    }

    print() {
        let current = this.head

        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }   

    remove(position) {
        if (position < 0 || position > this.length) {
            return 'Incorrect position value'
        }

        let current = this.head;

        if (position ===0) {
            this.head = current.next
        } else {
            let prev = null;
            let index = 0;

            while(index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = current.next;
        }
        this.length--;
        return current.value
    }

    isEmpty() {
        return this.length === 0
    }

    unshift(value) {
        let node = new Node(value);

        node.next = this.head;
        this.head = node;
        
        this.length++
    }

    shift() {
        if (this.length <= 0) {
            return 'Linked list is empty'
        }

        let current = this.head;

        this.head = current.next;

        this.length--;

        return current.value
    }

    getIndexOf(value) {
        let current = this.head;
        let index = 0;

        while(current) {
            if (current.value === value) {
                return index
            }

            current = current.next;
            index++
        }
        return -1
    }
    
    removeByValue(value) {
        return this.remove(this.getIndexOf(value))
    }

    getValueByPosition(position) {
        if (position < 0 || position > this.length) {
            return 'Incorrect position value'
        }

        let current = this.head;
        let index = 0;

        while(index < position) {
            current = current.next;
            index++
        }
        return current.value
    }

}
