import { ListNode } from "./listNode";

// test signature

export class LinkedList {
  count;
  head;

  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  static equals(elementA, elementB, customFunction) {
    if (!elementA || !elementB) return;

    if (!customFunction) return elementA === elementB;

    customFunction(elementA, elementB);
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  push(element) {
    const listNode = new ListNode(element);

    if (this.isEmpty()) {
      this.head = listNode;
      return;
    }

    let current = this.head;

    while (true) {
      if (current.next !== undefined) current = current.next;

      current.next = listNode;
      break;
    }

    this.count++;
  }
}
