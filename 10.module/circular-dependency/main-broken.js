// 메인 파일: 순환 종속성 문제 테스트
console.log("\n=== 순환 종속성 문제 테스트 ===");
console.log("exports 객체를 교체한 경우의 문제점을 확인합니다.\n");

try {
  const a = require("./a-broken.js");
  const b = require("./b-broken.js");

  console.log("모듈 A의 함수:", a.functionFromA());
  console.log("모듈 B의 함수:", b.functionFromB());

  console.log("\n=== 순환 참조 테스트 (문제 발생 가능) ===");
  a.useB();
  b.useA();
} catch (error) {
  console.error("에러 발생:", error.message);
}
