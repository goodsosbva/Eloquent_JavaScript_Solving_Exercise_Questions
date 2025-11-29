# 모듈화된 로봇 (Modularized Robot)

Eloquent JavaScript 10장 연습 문제 - 7장의 로봇 프로젝트를 모듈화한 버전입니다.

## 📋 문제 요약

7장에서 작성한 로봇 프로젝트의 바인딩들을 논리적으로 분리하여 모듈화된 프로그램으로 재구성하는 것이 목표입니다.

### 제시된 바인딩들

- `roads`, `buildGraph`, `roadGraph` - 그래프 관련
- `VillageState` - 마을 상태 클래스
- `runRobot` - 로봇 실행 함수
- `randomPick`, `randomRobot` - 랜덤 로봇
- `mailRoute`, `routeRobot` - 경로 기반 로봇
- `findRoute`, `goalOrientedRobot` - 목표 지향 로봇

## 📁 모듈 구조

### 1. `graph.js` - 그래프 데이터 구조

**책임**: 도로 데이터와 그래프 생성

**Export:**

- `roads`: 도로 배열
- `buildGraph(edges)`: 그래프 생성 함수
- `roadGraph`: 생성된 도로 그래프

**의존성**: 없음 (독립적)

### 2. `village-state.js` - 마을 상태 관리

**책임**: 마을 상태와 이동 로직 관리

**Export:**

- `VillageState` 클래스
  - `constructor(place, parcels)`: 초기 상태 생성
  - `move(destination)`: 목적지로 이동

**의존성:**

- `graph.js` → `roadGraph` 사용

### 3. `robots.js` - 로봇 알고리즘

**책임**: 다양한 로봇 구현

**Export:**

- `randomPick(array)`: 배열에서 랜덤 선택
- `randomRobot(state)`: 랜덤으로 이동하는 로봇
- `mailRoute`: 우편 배달 경로 배열
- `routeRobot(state, memory)`: 경로를 따라 이동하는 로봇
- `findRoute(graph, from, to)`: BFS를 사용한 경로 찾기
- `goalOrientedRobot(state, route)`: 목표 지향 로봇

**의존성:**

- `graph.js` → `roadGraph` 사용
- `village-state.js` → `VillageState` 타입 참조

### 4. `run-robot.js` - 로봇 실행 엔진

**책임**: 로봇 실행 루프 관리

**Export:**

- `runRobot(state, robot, memory)`: 로봇을 실행하고 결과 반환

**의존성:**

- `village-state.js` → `VillageState` 타입 사용

### 5. `modularized-robot.js` - 메인 실행 파일

**책임**: 모든 모듈을 조합하여 테스트 실행

**의존성:**

- 모든 모듈 import

## 🔗 의존성 관계

```
graph.js (최하위, 독립적)
    ↑
    ├── village-state.js
    │
    ├── robots.js ──→ village-state.js
    │
    └── run-robot.js ──→ village-state.js
                        └── robots.js (간접적)
```

**의존성 규칙:**

- 하위 모듈은 상위 모듈에 의존하지 않음
- 순환 의존성 없음
- 단방향 의존성만 존재

## 🎯 모듈화의 장점

### 1. 관심사 분리 (Separation of Concerns)

각 모듈이 하나의 명확한 책임만 가짐

- 그래프 관리 → `graph.js`
- 상태 관리 → `village-state.js`
- 로봇 알고리즘 → `robots.js`
- 실행 로직 → `run-robot.js`

### 2. 재사용성 (Reusability)

- `graph.js`는 다른 그래프 기반 프로젝트에서도 사용 가능
- `robots.js`의 로봇 알고리즘을 독립적으로 테스트 가능

### 3. 유지보수성 (Maintainability)

- 각 모듈을 독립적으로 수정 가능
- 버그 발생 시 해당 모듈만 수정하면 됨

### 4. 테스트 용이성 (Testability)

- 각 모듈을 독립적으로 테스트 가능
- Mock 객체를 사용한 단위 테스트 용이

## 📦 NPM 패키지 사용 여부

### 현재 구현: 직접 구현

**이유:**

- 학습 목적: 그래프와 경로 찾기 알고리즘 이해
- 단순함: BFS 알고리즘으로 충분
- 의존성 최소화

### NPM 패키지 고려 사항

**사용 가능한 패키지:**

- `graphlib`: 복잡한 그래프 연산이 필요한 경우
- `dijkstrajs`: 최단 경로 알고리즘이 필요한 경우

**사용 시기:**

- 프로덕션 환경에서 검증된 라이브러리 사용 권장
- 복잡한 그래프 알고리즘이 필요한 경우
- 성능 최적화가 중요한 경우

## 🚀 실행 방법

```bash
# Node.js에서 실행 (ES 모듈 지원 필요)
node modularized-robot.js
```

**실행 결과:**

- Random Robot: 랜덤으로 이동하며 모든 소포 배달
- Route Robot: 고정 경로를 따라 이동하며 배달
- Goal Oriented Robot: 목표 지향적으로 최적 경로로 배달

## 📝 인터페이스 설계 원칙

1. **최소 공개 원칙**: 필요한 것만 export
2. **명확한 의존성**: import로 의존성 명시
3. **캡슐화**: 내부 구현은 숨기고 인터페이스만 공개
4. **단방향 의존**: 순환 의존성 방지

## 🔍 학습 포인트

1. **모듈 분리 기준**: 기능별, 책임별로 분리
2. **의존성 관리**: 하위 → 상위 단방향 의존성 유지
3. **인터페이스 설계**: 명확한 export/import 구조
4. **코드 재사용**: 독립적인 모듈로 재사용성 향상
