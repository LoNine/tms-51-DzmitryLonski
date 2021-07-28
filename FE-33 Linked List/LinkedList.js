const LinkedListEmptyError = require('./LinkedListEmptyError');
const BadValueOfPositionError = require('./BadValueOfPositionError');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// eslint-disable-next-line no-unused-vars
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.length++;
  }

  pop() {
    if (this.length <= 0) {
      throw new LinkedListEmptyError('LinkedList is empty!');
    }

    let current = this.head;
    let prev = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.length--;
    return current.value;
  }

  add(position, value) {
    if (position < 0 || position > this.length) {
      throw new BadValueOfPositionError('Bad value of position!');
    }

    const node = new Node(value);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = node;
      node.next = current;
    }
    this.length++;
  }

  toArray() {
    const array = [];
    let current = this.head;

    while (current) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  remove(position) {
    if (position < 0 || position > this.length) {
      throw new BadValueOfPositionError('Bad value of position!');
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }
    this.length--;
    return current.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  unshift(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;

    this.length++;
  }

  shift() {
    if (this.length <= 0) {
      throw new LinkedListEmptyError('LinkedList is empty!');
    }

    const current = this.head;

    this.head = current.next;

    this.length--;

    return current.value;
  }

  getIndexOf(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }

      current = current.next;
      index++;
    }
    return -1;
  }

  removeByValue(value) {
    return this.remove(this.getIndexOf(value));
  }

  getValueByPosition(position) {
    if (position < 0 || position > this.length) {
      throw new BadValueOfPositionError('Bad value of position!');
    }

    let current = this.head;
    let index = 0;

    while (index < position) {
      current = current.next;
      index++;
    }
    return current.value;
  }
}

module.exports = LinkedList;
