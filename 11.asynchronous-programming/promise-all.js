function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    let result = [];
    let count = 0;

    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((value) => {
          result[i] = value;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch(reject);
    }
  });
}

function getFoo() {
  return new Promise((resolve) => {
    resolve("foo");
  });
}

function getBar() {
  return new Promise((resolve) => {
    resolve("bar");
  });
}

Promise_all([getFoo(), getBar()]).then(console.log).catch(console.error);
Promise_all([]).then(console.log).catch(console.error);
