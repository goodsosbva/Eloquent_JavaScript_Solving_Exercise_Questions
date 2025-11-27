// SCRIPTS 데이터 (간단한 테스트용)
const SCRIPTS = [
  {
    name: "Latin",
    ranges: [
      [0x0000, 0x007f],
      [0x0080, 0x00ff],
      [0x0100, 0x017f],
      [0x0180, 0x024f],
      [0x1e00, 0x1eff],
    ],
    direction: "ltr",
  },
  {
    name: "Hangul",
    ranges: [
      [0xac00, 0xd7a3],
      [0x1100, 0x11ff],
      [0x3130, 0x318f],
    ],
    direction: "ltr",
  },
  {
    name: "Han",
    ranges: [
      [0x4e00, 0x9fff],
      [0x3400, 0x4dbf],
      [0x20000, 0x2a6df],
    ],
    direction: "ltr",
  },
  {
    name: "Arabic",
    ranges: [
      [0x0600, 0x06ff],
      [0x0750, 0x077f],
      [0x08a0, 0x08ff],
      [0xfb50, 0xfdff],
      [0xfe70, 0xfeff],
    ],
    direction: "rtl",
  },
  {
    name: "Hebrew",
    ranges: [[0x0590, 0x05ff]],
    direction: "rtl",
  },
];

// 1. characterScript: 문자 코드로 스크립트 찾기
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

// 2. countBy: 그룹별 개수 세기
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// 3. dominantDirection: 지배적인 방향 찾기
function dominantDirection(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  if (scripts.length == 0) return "ltr";

  return scripts.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

const text = "안녕 Hello";
console.log(dominantDirection(text)); // "ltr" 출력
