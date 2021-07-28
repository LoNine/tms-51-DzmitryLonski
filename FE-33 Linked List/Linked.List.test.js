const LinkedList = require('./LinkedList');
const LinkedListEmptyError = require('./LinkedListEmptyError');
const BadValueOfPositionError = require('./BadValueOfPositionError');

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

  describe('add', () => {
    it('throws an error when required position < 0', () => {
      const linkedList = new LinkedList();
      const result = () => {
        linkedList.add(-1, 'value');
      };

      expect(result).toThrow(BadValueOfPositionError);
    });

    it('throws an error when required position > list length', () => {
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

      const requiredResult = {
        'head': {
          'value': 1,
          'next': {
            'value': 2,
            'next': {
              'value': 'value',
              'next': {
                'value': 3,
                'next': null,
              },
            },
          },
        },
        'length': 4,
      };

      expect(linkedList).toMatchObject(requiredResult);
    });

    it('links next node to the added node', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);

      linkedList.add(2, 'value');

      const requiredResult = {'value': 3, 'next': null};

      expect(linkedList.head.next.next.next).toMatchObject(requiredResult);
    });

    it('links previous node to the added one', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);

      linkedList.add(2, 'value');

      const requiredResult = {
        'value': 'value',
        'next': {'value': 3, 'next': null},
      };

      expect(linkedList.head.next.next).toMatchObject(requiredResult);
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
