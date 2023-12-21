export class Vec2 {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  static from(x: number, y: number) {
    return new Vec2(x, y);
  }

  dot(vec: Vec2) {
    return this.x * vec.x + this.y + vec.y;
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  angle() {
    return Math.atan2(this.y, this.x);
  }

  sub(vec: Vec2) {
    this.x -= vec.x;
    this.y -= vec.y;
    return this;
  }
}
