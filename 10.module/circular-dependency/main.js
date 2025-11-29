// 순환 종속성 모듈 테스트
const a = require("./a.js");
const b = require("./b.js");

console.log("\n=== 순환 종속성 테스트 ===");
console.log("모듈 A의 함수:", a.functionFromA());
console.log("모듈 B의 함수:", b.functionFromB());

console.log("\n=== 순환 참조 테스트 ===");
a.useB();
b.useA();
