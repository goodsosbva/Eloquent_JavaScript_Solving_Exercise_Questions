const b = require("./b-broken.js");

console.log("모듈 A 로딩 시작");

module.exports = {
  functionFromA: function () {
    return "함수 A";
  },
  useB: function () {
    console.log("모듈 A에서 모듈 B의 함수 호출:", b.functionFromB());
  },
};

console.log("모듈 A 로딩 완료");
