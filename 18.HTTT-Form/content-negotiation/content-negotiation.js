const url = "https://eloquentjavascript.net/author";

// 1. text/plain 형식 요청
async function fetchPlainText() {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "text/plain",
      },
    });
    const text = await response.text();
    console.log("=== text/plain ===");
    console.log(text);
    return text;
  } catch (error) {
    console.error("text/plain 요청 실패:", error);
  }
}

// 2. text/html 형식 요청
async function fetchHTML() {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "text/html",
      },
    });
    const html = await response.text();
    console.log("=== text/html ===");
    console.log(html);
    return html;
  } catch (error) {
    console.error("text/html 요청 실패:", error);
  }
}

// 3. application/json 형식 요청
async function fetchJSON() {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    const json = await response.json();
    console.log("=== application/json ===");
    console.log(json);
    return json;
  } catch (error) {
    console.error("application/json 요청 실패:", error);
  }
}

// 4. application/rainbows+unicorns 형식 요청 (존재하지 않는 형식)
async function fetchRainbowsUnicorns() {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/rainbows+unicorns",
      },
    });
    console.log("=== application/rainbows+unicorns ===");
    const text = await response.text();
    console.log("Response:", text);
    return response.status;
  } catch (error) {
    console.error("application/rainbows+unicorns 요청 실패:", error);
  }
}

// 모든 요청 실행
async function runAll() {
  await fetchPlainText();
  await fetchHTML();
  await fetchJSON();
  await fetchRainbowsUnicorns();
}

// 실행
runAll();
