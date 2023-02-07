module.exports = class Stack {
  //  private number
  #count = 0;
  // private
  #items = {};

  constructor() {
    this.#count = 0;
    this.#items = {};
    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
    this.toString = this.toString.bind(this);
    this.peek = this.peek.bind(this);
    this.size = this.size.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.clean = this.clean.bind(this);
  }

  push(...elements) {
    if (!elements || elements.length === 0) return;

    elements.forEach((element) => {
      this.#items[this.#count] = element;
      this.#count += 1;
    });
  }

  pop() {
    if (this.isEmpty()) return undefined;

    const removedElement = this.#items[this.#count - 1];

    delete this.#items[this.#count - 1];

    this.#count -= 1;

    return removedElement;
  }

  toString() {
    if (this.isEmpty()) return "";

    let strObj = `${this.#items[0]}`;

    for (let i = 1; i < this.#count; i++) {
      strObj += `,${this.#items[i]}`;
    }

    return strObj;
  }

  peek() {
    return this.#items[this.#count - 1];
  }

  size() {
    return this.#count;
  }

  isEmpty() {
    return this.#count === 0;
  }

  clean() {
    // Aiming performance, we're not respecting the LIFO principle on this method
    this.#count = 0;
    this.#items = {};
  }
};
