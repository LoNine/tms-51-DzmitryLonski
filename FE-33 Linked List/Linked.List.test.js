const LinkedList = require('./LinkedList');
const LinkedListEmptyError = require('./LinkedListEmptyError');
// const BadValueOfPositionError = require('./BadValueOfPositionError');

describe('LinkedList', () => {
  describe('push', () => {
    it('adds node to the linked list', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);

      const requiredResult = {'head': {'value': 1, 'next': null}, 'length': 1};
      expect(linkedList).toMatchObject(requiredResult);
    });

    it('links previous node to the next one', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);

      const requiredResult = {
        'head': {'value': 1, 'next': {'value': 2, 'next': null}}, 'length': 2,
      };

      expect(linkedList).toMatchObject(requiredResult);
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

      const requiredResult = {
        'head': {'value': 1, 'next': {'value': 2, 'next': null}}, 'length': 2,
      };

      expect(linkedList).toMatchObject(requiredResult);
    });
  });
});
