export class Queue {
  items;
  lowestCounter;
  counter;

  constructor() {
    this.clear();

    this.enqueue = this.enqueue.bind(this);
    this.dequeue = this.dequeue.bind(this);
    this.size = this.size.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.peek = this.peek.bind(this);
    this.toString = this.toString.bind(this);
    this.clear = this.clear.bind(this);
  }

  size() {
    return this.counter - this.lowestCounter;
  }

  isEmpty() {
    return this.size() === 0;
  }

  // this method does not respect the FIFO principle in order of priorizing the performance
  clear() {
    this.items = {};
    this.counter = 0;
    this.lowestCounter = 0;
  }

  enqueue(item) {
    this.items[this.counter] = item;
    this.counter++;
  }

  dequeue() {
    const returning = this.items[this.lowestCounter];
    delete this.items[this.lowestCounter];

    this.lowestCounter++;

    return returning;
  }

  peek() {
    return this.items[this.lowestCounter];
  }

  toString() {
    if (this.isEmpty()) return "";

    let string = `${this.items[this.lowestCounter]};`;

    for (let i = this.lowestCounter + 1; i < this.counter; i++) {
      string += `${this.items[i]};`;
    }

    return string;
  }
}
