function loop(init, test, update, body) {
  console.log("init:", init);
  console.log("test 함수:", test.toString());
  console.log("update 함수:", update.toString());
  console.log("body 함수:", body.toString());

  let value = init;

  while (test(value)) {
    body(value);
    value = update(value);
  }
}

loop(
  0,
  (n) => n < 3,
  (n) => n + 1,
  (n) => console.log(n)
);
