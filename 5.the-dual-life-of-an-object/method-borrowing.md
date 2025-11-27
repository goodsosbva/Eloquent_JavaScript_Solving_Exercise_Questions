# 메서드 차용 (Method Borrowing)

## 문제 상황

객체에 `hasOwnProperty`라는 속성이 있으면, 실제 `hasOwnProperty` 메서드를 호출할 수 없습니다.

```javascript
const map = {
  hasOwnProperty: "이건 속성이지 메서드가 아니야",
  one: 1,
  two: 2,
};

// ❌ 이렇게 하면 안됨 - 객체의 속성이 메서드를 가림
map.hasOwnProperty("one"); // TypeError!
```

## 해결 방법

### 방법 1: Object.prototype.hasOwnProperty.call() 사용

```javascript
Object.prototype.hasOwnProperty.call(map, "one"); // true
Object.prototype.hasOwnProperty.call(map, "hasOwnProperty"); // true
Object.prototype.hasOwnProperty.call(map, "three"); // false
```

### 방법 2: Object.hasOwn() 사용 (ES2022)

```javascript
Object.hasOwn(map, "one"); // true
Object.hasOwn(map, "hasOwnProperty"); // true
Object.hasOwn(map, "three"); // false
```

## in 연산자 vs hasOwnProperty

### `in` 연산자
- 프로토타입 체인 전체를 확인
- 객체 자신의 속성 + 프로토타입에서 상속받은 속성 모두 확인

```javascript
const parent = { inherited: "상속 속성" };
const child = Object.create(parent);
child.own = "자신의 속성";

"inherited" in child;  // true - 프로토타입까지 확인
"own" in child;        // true
"toString" in child;   // true - Object.prototype까지 확인!
```

### `hasOwnProperty`
- 객체 자신의 속성만 확인
- **프로토타입 속성을 무시**

```javascript
child.hasOwnProperty("inherited");  // false - 프로토타입 속성 무시
child.hasOwnProperty("own");        // true - 자신의 속성만
child.hasOwnProperty("toString");   // false - 프로토타입 속성 무시
```

## 요약

- **프로토타입 속성을 무시하고 싶을 때**: `hasOwnProperty` 사용
- **메서드가 가려졌을 때**: 메서드 차용(`call`) 또는 `Object.hasOwn()` 사용

