# Eloquent JavaScript 연습 문제 풀이

![Eloquent JavaScript](https://github.com/user-attachments/assets/31624efb-2146-4b23-a4c3-c466ac416730)

> **Eloquent JavaScript**  
> 마레인 하버비케 지음 | 양정열 옮김  
> 연습 문제 풀이 및 설명

## 📚 소개

이 저장소는 "Eloquent JavaScript" 책의 연습 문제를 풀이하고 설명한 내용을 담고 있습니다.

## 📁 폴더 구조

- `4.higher-order-function/` - 고차 함수 관련 연습 문제
- `5.the-dual-life-of-an-object/` - 객체의 이중성 관련 연습 문제
- `8.bug-and-error/` - 버그와 에러 처리 관련 연습 문제
- `10.module/` - 모듈 시스템 관련 연습 문제
- `11.asynchronous-programming/` - 비동기 프로그래밍 관련 연습 문제

## 📝 내용

각 폴더에는 연습 문제의 풀이 코드와 설명이 포함되어 있습니다.

### 8장: 버그와 에러 (Bug and Error)

- **`retry.js`** - 재시도 문제

  - `primitiveMultiply` 함수가 20% 확률로 성공, 80% 확률로 예외를 던질 때
  - 성공할 때까지 재시도하는 `reliableMultiply` 함수 구현
  - 예상된 예외만 처리하는 에러 핸들링

- **`locked-box.js`** - 잠긴 상자 문제
  - 잠금 상태를 가진 상자 객체
  - `withBoxUnlocked` 함수로 안전하게 잠금 해제 → 작업 수행 → 다시 잠금
  - `finally` 블록을 사용한 예외 안전성 보장

### 10장: 모듈 (Module)

#### `modularized-robot/` - 모듈화된 로봇

7장의 로봇 프로젝트를 모듈화한 버전입니다.

**모듈 구조:**

- `graph.js` - 도로 그래프 데이터 구조 (독립적)
- `village-state.js` - 마을 상태 관리 클래스
- `robots.js` - 다양한 로봇 알고리즘 구현
- `run-robot.js` - 로봇 실행 엔진
- `modularized-robot.js` - 메인 실행 파일

**학습 포인트:**

- 관심사 분리 (Separation of Concerns)
- 모듈 의존성 관리 (단방향 의존성)
- 인터페이스 설계 (export/import)
- 코드 재사용성 향상

#### `circular-dependency/` - 순환 종속성 예제

CommonJS 모듈 시스템에서 순환 종속성이 어떻게 작동하는지 설명하는 예제입니다.

**파일 구조:**

- `a.js`, `b.js` - 정상 작동하는 순환 종속성 예제
- `a-broken.js`, `b-broken.js` - 문제가 발생하는 예제
- `main.js`, `main-broken.js` - 테스트 실행 파일

**핵심 개념:**

- `exports.속성 = 값` vs `module.exports = {...}`의 차이
- 순환 종속성에서 객체 참조 유지/끊김의 원리
- CommonJS의 동적 모듈 로딩 메커니즘

### 11장: 비동기 프로그래밍 (Asynchronous Programming)

#### `tracing-a-small-knife.js` - 작은 칼 추적하기

둥지 간 이동하는 칼을 추적하는 문제입니다.

**문제 요약:**

- 칼이 둥지 간 이동할 때마다 양쪽 둥지의 저장소에 "scalpel" 항목에 위치 정보 기록
- 자신을 가리키는 둥지를 발견할 때까지 저장소에서 이동 경로 추적

**구현 내용:**

- `locateScalpel(nest)`: async/await와 while문을 사용한 구현
- `anyStorage(nest, name)`: 둥지 저장소에서 데이터를 읽는 비동기 함수 시뮬레이션

**학습 포인트:**

- async/await를 사용한 비동기 반복 처리
- Promise와 비동기 흐름 제어
- 저장소 데이터를 통한 경로 추적 알고리즘

#### `promise-all.js` - Promise.all 구현

`Promise.all` 함수를 직접 구현한 예제입니다.

**구현 내용:**

- `Promise_all(promises)`: Promise.all과 동일한 동작을 하는 함수
- 빈 배열 처리: 빈 배열일 때 즉시 빈 배열로 resolve
- 여러 Promise를 병렬로 처리하고 모든 결과를 배열로 반환
- 하나라도 실패하면 즉시 reject

**학습 포인트:**

- Promise 생성자와 resolve/reject 사용
- 비동기 작업의 병렬 처리
- Promise 체이닝과 에러 전파
