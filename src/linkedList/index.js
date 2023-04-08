import { ListNode } from "./listNode";

export class LinkedList {
  count;
  head;

  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  setEqual(newEquals) {
    this.equals = newEquals;
  }

  equals(elementA, elementB, customFunction) {
    if (!elementA || !elementB) return;

    if (!customFunction) return elementA === elementB;

    customFunction(elementA, elementB);
  }

  indexOf(el) {
    if (this.equals(this.head, el)) return 0;
    let currentElement = this.head.next;
    let index = 1;

    while (!this.equals(currentElement, el)) {
      if (current == undefined) return -1;
      index++;
      currentElement = current.next;
    }

    return index;
  }

  getElementAt(index) {
    if (index === 0) return this.head;

    if (index > this.size()) return undefined;

    let current = this.head.next;
    for (let i = 1; i < index; i++) current = current.next;

    return current;
  }

  insert(el, index) {
    const node = new Node(el);

    const currentElementBeforeTheIndex = this.getElementAt(index - 1);
    const currentElementAtTheIndex = currentElementBeforeTheIndex.next;

    currentElementBeforeTheIndex.next = node;
    node.next = currentElementAtTheIndex;

    return node;
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
