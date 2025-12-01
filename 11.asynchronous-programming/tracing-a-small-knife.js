// ============================================
// 작은 칼 추적하기 (Tracking a Small Knife)
// ============================================

/**
 * anyStorage 함수 (이전에 만든 함수)
 * 특정 둥지의 저장소에서 특정 항목을 읽어오는 비동기 함수
 *
 * @param {string} nest - 둥지 이름
 * @param {string} name - 저장소 항목 이름
 * @returns {Promise<string>} 저장소 항목의 값
 */
async function anyStorage(nest, name) {
  const storage = {
    nest1: { scalpel: "nest2" },
    nest2: { scalpel: "nest3" },
    nest3: { scalpel: "nest3" },
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (storage[nest] && storage[nest][name]) {
        console.log(`${nest}의 ${name}을 읽었습니다 - ${storage[nest][name]}.`);
        resolve(storage[nest][name]);
      } else {
        reject(new Error(`Cannot access ${nest}`));
      }
    }, 100);
  });
}

// ============================================
// 버전 1: async/await + while문
// ============================================

/**
 * 특정 둥지에서 시작하여 작은 칼의 현재 위치를 찾는 함수
 *
 * @param {string} nest - 시작할 둥지 이름
 * @returns {Promise<string>} 칼이 있는 둥지 이름
 */
async function locateScalpel(nest) {
  let currentNest = nest;

  while (true) {
    const nextNest = await anyStorage(currentNest, "scalpel");

    if (nextNest === currentNest) {
      return currentNest;
    }

    currentNest = nextNest;
  }
}

// ============================================
// 테스트
// ============================================

(async () => {
  console.log("=== 작은 칼 추적하기 테스트 ===\n");

  // 입력: 시작할 둥지 이름
  const startNest = "nest1";

  console.log(`시작 둥지: ${startNest}\n`);

  // 버전 1: async/await
  try {
    const result1 = await locateScalpel(startNest);
    console.log(`1. async/await 버전 결과: ${result1}`);
  } catch (error) {
    console.log(`1. async/await 버전 에러: ${error.message}`);
  }

  console.log("\n에러 처리 확인:");
  console.log("- 두 버전 모두 anyStorage가 거부되면 Promise가 거부됨");
  console.log("- async/await: try-catch로 처리");
  console.log("- Promise: .catch()로 처리");
})();
