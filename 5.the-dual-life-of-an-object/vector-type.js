class vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new vector(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new vector(this.x - other.x, this.y - other.y);
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

const v1 = new vector(1, 2);
const v2 = new vector(2, 3);

console.log(v1.plus(v2)); // vector { x: 3, y: 5 }
console.log(v1.minus(v2)); // vector { x: -1, y: -1 }
console.log(v1.length());
