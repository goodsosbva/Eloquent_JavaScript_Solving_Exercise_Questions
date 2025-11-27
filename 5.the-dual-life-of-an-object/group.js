class Group {
  constructor() {
    this.items = new Set();
  }

  add(value) {
    if (!this.items.has(value)) {
      this.items.add(value);
    }
  }

  delete(value) {
    if (this.items.has(value)) {
      this.items.delete(value);
    }
  }

  has(value) {
    return this.items.has(value);
  }

  static from(iterable) {
    const group = new Group();
    for (const value of iterable) {
      group.add(value);
    }
    return group;
  }
}

const group = Group.from([1, 2, 3, 4, 5]);
console.log(group);
