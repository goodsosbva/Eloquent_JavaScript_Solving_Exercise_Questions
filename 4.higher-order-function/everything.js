function everything_using_for(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}

function everything_using_some(array, test) {
  const flag = array.some((element) => !test(element));
  return !flag;
}

console.log(everything_using_for([1, 2, 3, 4, 5], (n) => n < 10));
console.log(everything_using_some([1, 2, 3, 4, 5], (n) => n < 10));
