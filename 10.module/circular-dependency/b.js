const a = require("./a.js");

console.log("모듈 B 로딩 시작");

function useA() {
  console.log("모듈 B에서 모듈 A의 함수 호출:", a.functionFromA());
}

exports.functionFromB = function () {
  return "함수 B";
};

exports.useA = useA;

console.log("모듈 B 로딩 완료");
