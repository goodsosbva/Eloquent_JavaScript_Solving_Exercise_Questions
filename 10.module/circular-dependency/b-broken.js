// 모듈 B (문제 있는 버전): exports 객체를 교체함
const a = require("./a-broken.js");

console.log("모듈 B 로딩 시작");

// exports 객체를 새 객체로 교체 (문제 발생!)
module.exports = {
  functionFromB: function () {
    return "함수 B";
  },
  useA: function () {
    // 모듈 A가 아직 로딩 중이므로 undefined일 수 있음
    console.log("모듈 B에서 모듈 A의 함수 호출:", a.functionFromA());
  },
};

console.log("모듈 B 로딩 완료");
