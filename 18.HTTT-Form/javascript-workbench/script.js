const codeTextarea = document.getElementById("code");
const runButton = document.getElementById("run-button");
const outputPre = document.getElementById("output");

let outputMessages = [];

// console.log를 오버라이드하여 출력 캡처
const originalConsoleLog = console.log;
const originalConsoleError = console.error;

console.log = function (...args) {
  const message = args.map((arg) => String(arg)).join(" ");
  outputMessages.push(message);
  originalConsoleLog.apply(console, args);
};

console.error = function (...args) {
  const message = "ERROR: " + args.map((arg) => String(arg)).join(" ");
  outputMessages.push(message);
  originalConsoleError.apply(console, args);
};

runButton.addEventListener("click", () => {
  const code = codeTextarea.value;
  outputMessages = [];
  outputPre.textContent = "";

  try {
    const wrappedFunction = new Function(code);
    wrappedFunction();

    if (outputMessages.length > 0) {
      outputPre.textContent = outputMessages.join("\n");
    } else {
      outputPre.textContent = "코드가 실행되었습니다. (출력 없음)";
    }
  } catch (error) {
    outputPre.textContent = `에러: ${error.message}`;
    console.error(error);
  }
});
