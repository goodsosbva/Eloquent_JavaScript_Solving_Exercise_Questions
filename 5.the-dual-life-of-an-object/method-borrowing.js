// 문제 상황: 객체에 hasOwnProperty라는 속성이 있으면
// 실제 hasOwnProperty 메서드를 호출할 수 없음

const map = {
  hasOwnProperty: "이건 속성이지 메서드가 아니야",
  one: 1,
  two: 2,
};

// 이렇게 하면 안됨 - 객체의 속성이 메서드를 가림
// console.log(map.hasOwnProperty("one")); // TypeError!

// 해결 방법 1: Object.prototype.hasOwnProperty.call() 사용
console.log(Object.prototype.hasOwnProperty.call(map, "one")); // true
console.log(Object.prototype.hasOwnProperty.call(map, "hasOwnProperty")); // true
console.log(Object.prototype.hasOwnProperty.call(map, "three")); // false

// 해결 방법 2: Object.hasOwn() 사용
console.log(Object.hasOwn(map, "one")); // true
console.log(Object.hasOwn(map, "hasOwnProperty")); // true
console.log(Object.hasOwn(map, "three")); // false
