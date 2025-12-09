# 콘텐츠 협상 (Content Negotiation)

Eloquent JavaScript 18장 연습 문제 - HTTP Accept 헤더를 사용한 콘텐츠 협상

## 📋 문제 요약

`https://eloquentjavascript.net/author`에 `Accept` 헤더를 사용하여 다른 형식의 리소스를 요청하는 문제입니다.

## 🎯 요구사항

1. `text/plain` 형식으로 요청
2. `text/html` 형식으로 요청
3. `application/json` 형식으로 요청
4. `application/rainbows+unicorns` 형식으로 요청 후 상태 코드 확인

## 📝 구현 내용

- `fetch()` API를 사용하여 HTTP 요청
- `headers` 옵션에 `Accept` 헤더 설정
- 각 미디어 타입에 맞는 응답 처리
- 존재하지 않는 형식 요청 시 상태 코드 확인

## 🚀 실행 방법

```bash
node content-negotiation.js
```

또는 브라우저 콘솔에서 실행:

```javascript
// 각 함수를 개별적으로 실행하거나
fetchPlainText();
fetchHTML();
fetchJSON();
fetchRainbowsUnicorns();

// 또는 모든 요청을 한 번에 실행
runAll();
```

## 📚 학습 포인트

- HTTP Accept 헤더의 역할
- 서버가 클라이언트의 선호 형식에 따라 다른 응답을 반환하는 방법
- `fetch()` API의 `headers` 옵션 사용
- 콘텐츠 협상(Content Negotiation) 개념
