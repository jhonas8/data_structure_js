import { Queue } from "../queue";

/**
 * Claryfing some concepts:
 *  - The front of the queue is the lowest index of the queue, and the back is the highest
 */

/**
 * @class Dequeue
 * @extends Queue
 * @description
 * A Dequeue is a queue that allows you to add and remove items from both the front and the back.
 * It is a combination of a stack and a queue.
 **/
export class Dequeue extends Queue {
  constructor() {
    super();
  }

  addFront(item) {
    // In case it is empty
    if (this.isEmpty()) this.addBack(item);

    // In case an item was already removed from the front
    if (this.lowestCounter() > 0) {
      this.lowestCounter -= 1;
      this.items[this.lowestCounter] = item;
    }

    if (this.lowestCounter === 0) {
      this.lowestCounter--;
      this.items[this.lowestCounter] = item;
    }
  }

  addBack(item) {
    this.enqueue(item);
  }
}
