import Stack from ".";

descibre("Testing the creation of the instance", () => {
  let stack;
  const RANDOM_GENERATOR_CONST = 8;
  const RANDOM_ELEMENTS = [0, 0, 0].map(() =>
    Math.round(RANDOM_GENERATOR_CONST * Math.random())
  );

  beforeAll(() => {
    stack = new Stack();
    stack.push(...RANDOM_ELEMENTS);
  });

  afterEach(() => {
    stack.clean();
    stack.push(...RANDOM_ELEMENTS);
  });

  test("The instance should have the correct type", () => {
    expect(stack instanceof Stack).toBe(true);
  });

  test("The 'count' and 'items' properties should remain private", () => {
    const items = stack.items;
    const count = stack.count;

    expect(items).toBe(undefined);
    expect(count).toBe(undefined);
  });

  test("The method clean should");

  test("The peek method should return the top-most element of the stack", () => {
    const stackTop = stack.peek();
    expect(stackTop).toBe(RANDOM_ELEMENTS[RANDOM_ELEMENTS.length - 1]);
  });

  test("The pop method should remove the top-most element and return it", () => {
    const topMostElement = stack.peek();
    const removedElement = stack.pop();

    expect(topMostElement).toBe(removedElement);
    expect(stack.peek()).not.toBe(removedElement);
  });

  test("The push method should put items in the top of the stack", () => {
    test("Should add an idividual value", () => {
      const addingElement = RANDOM_ELEMENTS[0];

      stack.push();

      const topMostStackElement = stack.peek();

      expect(topMostStackElement).toBe(addingElement);
    });

    test("Should add multiple elemements", () => {
      stack.push(...RANDOM_ELEMENTS);

      RANDOM_ELEMENTS.forEach((addingElement) => {
        stack.push();

        const topMostStackElement = stack.peek();

        expect(topMostStackElement).toBe(addingElement);
      });
    });

    test("The method size should return the right length of the stack", () => {
      expect(stack.size()).toBe(RANDOM_ELEMENTS.length);
    });

    test("The mehtod isEmpty should correctly return if the stack is empty or not", () => {
      expect(stack.isEmpty()).toBe(false);

      stack.clean();

      expect(stack.isEmpty()).toBe(true);
    });
  });
});
