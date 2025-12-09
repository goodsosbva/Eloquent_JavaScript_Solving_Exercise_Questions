# JavaScript Workbench

## 프로젝트 소개

브라우저에서 JavaScript 코드를 작성하고 실행할 수 있는 간단한 워크벤치 애플리케이션입니다. 코드를 입력하고 실행 버튼을 클릭하면 결과를 바로 확인할 수 있습니다.

## 주요 기능

- **코드 편집**: 텍스트 영역에 JavaScript 코드 작성
- **코드 실행**: 실행 버튼으로 코드를 즉시 실행
- **출력 캡처**: `console.log()`와 `console.error()` 출력을 화면에 표시
- **에러 처리**: 실행 중 발생한 에러를 표시

## 사용 방법

1. `index.html` 파일을 브라우저에서 엽니다
2. 텍스트 영역에 JavaScript 코드를 입력합니다
3. **실행** 버튼을 클릭합니다
4. 출력 영역에서 결과를 확인합니다

## 예제 코드

```javascript
console.log("Hello, World!");
console.log(2 + 3);
console.log("세상에", "안녕하세요");
```

## 파일 구조

```
javascript-workbench/
├── index.html    # HTML 구조
├── style.css     # 스타일링
└── script.js     # 워크벤치 로직
```

## 기술 스택

- HTML5
- CSS3
- Vanilla JavaScript

## 주요 구현 내용

- `Function` 생성자를 사용한 동적 코드 실행
- `console.log`와 `console.error` 오버라이드
- 출력 메시지 캡처 및 표시
- 에러 핸들링 및 사용자 피드백

## 주의사항

- 브라우저의 보안 정책에 따라 일부 코드 실행이 제한될 수 있습니다
- 무한 루프나 무거운 연산은 브라우저를 멈출 수 있으니 주의하세요
