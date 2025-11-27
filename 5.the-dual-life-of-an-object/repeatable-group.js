class RepeatableGroup {
  constructor() {
    this.items = new Set();
    this.sequence = [];
  }

  add(value) {
    if (!this.items.has(value)) {
      this.items.add(value);
    }
    this.sequence.push(value);
  }

  delete(value) {
    const index = this.sequence.indexOf(value);
    if (index !== -1) {
      this.sequence.splice(index, 1);
    }
    if (this.sequence.indexOf(value) === -1) {
      this.items.delete(value);
    }
  }

  has(value) {
    return this.items.has(value);
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.sequence.length) {
          return { value: this.sequence[index++], done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}

const repeatableGroup = new RepeatableGroup();
repeatableGroup.add(1);
repeatableGroup.add(2);
repeatableGroup.add(3);
console.log(repeatableGroup);
for (const item of repeatableGroup) {
  console.log(item);
}
repeatableGroup.delete(2);
console.log(repeatableGroup);
for (const item of repeatableGroup) {
  console.log(item);
}
repeatableGroup.add(2);
console.log(repeatableGroup);
for (const item of repeatableGroup) {
  console.log(item);
}
