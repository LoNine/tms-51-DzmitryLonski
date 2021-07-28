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
  
  describe('unshift', () => {
    it('adds new node to the start of linked list', () => {
      const linkedList = new LinkedList();
      linkedList.unshift(1);
      
      expect(linkedList.head.value).toBe(1)
    });
    
    it('links new node to the previous first node', () => {
      const linkedList = new LinkedList();
      
      linkedList.push(1);
      linkedList.unshift('value');
      
      expect(linkedList.head.next).not.toBeNull();
    });
  });
  
  describe('shift', () => {
    it('returns value of first node in linked list', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);
      
      const result = linkedList.shift();
      
      expect(result).toBe(1);
    });
    
    it('rewrite first node to second one', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);
      
      linkedList.shift();
      expect(linkedList.head.value).toBe(2);
    });
  });
  
  describe('remove', () => {
    it('throws an error when position less than 0', () => {
      const linkedList = new LinkedList();
      const result = () => {
        linkedList.remove(-1);
      };
     expect(result).toThrow(BadValueOfPositionError);
    });
    
    it('throws an error when position more than linked list length', () => {
      const linkedList = new LinkedList();
      const result = () => {
        linkedList.remove(2);
      };
      
      expect(result).toThrow(BadValueOfPositionError);
    });
    
    it('returns value of deleted node', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);
      linkedList.push(4);
      
      const result = linkedList.remove(2);
      
      expect(result).toBe(3);
    });
    
    it('links nodes before and after the deleted node', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);
      
      linkedList.remove(1);
      const result = linkedList.head.next.value;
      expect(result).toBe(3);
    });
    
    it('delete last node if position equals linked list length', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      
      linkedList.remove(1);
      const result = linkedList.head.next;
      
      expect(result).toBeNull();
    });
    
    it('changes first node if position equals 0', () => {
      const linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      
      linkedList.remove(0);
      const result = linkedList.head.value;
      
      expect(result).toBe(2);
    });
  });
  
  describe('getIndexOf', () => {
    it('returns the index of the first found node', () => {
        const linkedList = new LinkedList();
      linkedList.push('value 1');
      linkedList.push('value 2');
      linkedList.push('value 3');
      linkedList.push('value 4');
      
      const result = linkedList.getIndexOf('value 3');
      
      expect(result).toBe(2)
    });
  });
});
