const LinkedList = require('./LinkedList');
const LinkedListEmptyError = require('./LinkedListEmptyError');
const BadValueOfPositionError = require('./BadValueOfPositionError');

describe('LinkedList', () => {
  describe('push', () => {
    it('adds node to the linked list', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);

      expect(linkedList.head.value).toBe(1);
    });

    it('links previous node to the next one', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);

      expect(linkedList.head.next).not.toBeNull();
    });
  });

  describe('pop', () => {
    it('throws "is empty error" when used on empty linked list', () => {
      const linkedList = new LinkedList();
      const result = () => {
        linkedList.pop();
      };

      expect(result).toThrow(LinkedListEmptyError);
    });

    it('returns last added value', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);

      const result = linkedList.pop();

      expect(result).toBe(3);
    });

    it('delete last node from linked list', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);

      linkedList.pop();

      expect(linkedList.head.next.next).toBeNull();
    });
  });

  describe('add', () => {
    it('throws an error when required position less than 0', () => {
      const linkedList = new LinkedList();
      const result = () => {
        linkedList.add(-1, 'value');
      };

      expect(result).toThrow(BadValueOfPositionError);
    });

    it('throws an error when required position more than list length', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);

      const result = () => {
        linkedList.add(5, 'value');
      };

      expect(result).toThrow(BadValueOfPositionError);
    });

    it('adds node to required position', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);

      linkedList.add(2, 'value');

      expect(linkedList.head.next.next.value).toBe('value');
    });

    it('links next node to the added node', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);

      linkedList.add(2, 'value');

      expect(linkedList.head.next.next.next).not.toBeNull();
    });

    it('links previous node to the added one', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);

      linkedList.add(2, 'value');

      expect(linkedList.head.next.next).not.toBeNull();
    });
  });

  describe('toArray', () => {
    it('returns array of linked list values', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);
      linkedList.push(4);
      linkedList.push(5);

      const result = linkedList.toArray();
      const requiredResult = [1, 2, 3, 4, 5];

      expect(result).toEqual(requiredResult);
    });
  });

  describe('isEmpty', () => {
    it('returns true when linked list is empty', () => {
      const linkedList = new LinkedList();
      const result = linkedList.isEmpty();

      expect(result).toBeTruthy();
    });

    it('returns false when linked list is not empty', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);

      const result = linkedList.isEmpty();

      expect(result).toBeFalsy();
    });
  });
});
