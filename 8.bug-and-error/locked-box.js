const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  },
};

function withBoxUnlocked(body) {
  const wasLocked = box.locked;
  box.unlock();
  try {
    return body();
  } finally {
    if (wasLocked) {
      box.lock();
    }
  }
}

withBoxUnlocked(() => {
  box.content.push("gold piece");
  box.content.push("money");
});

console.log(box.locked);
try {
  console.log(box.content);
} catch (e) {
  console.log(e);
}

withBoxUnlocked(() => {
  console.log(box.content);
});
