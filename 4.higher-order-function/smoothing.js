const arr2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function smooth(arr2D) {
  return arr2D.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
}

console.log(smooth(arr2D));
