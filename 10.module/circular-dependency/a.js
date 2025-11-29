const b = require("./b.js");

console.log("모듈 A 로딩 시작");

function useB() {
  console.log("모듈 A에서 모듈 B의 함수 호출:", b.functionFromB());
}

exports.functionFromA = function () {
  return "함수 A";
};

exports.useB = useB;

console.log("모듈 A 로딩 완료");
