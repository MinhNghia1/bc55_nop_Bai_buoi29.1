import Person from "./Person.js";
export default class Student extends Person {
  constructor(id, name, email, address, chucVu, math, physics, chemistry) {
    super(id, name, email, address, chucVu);
    this.math = math;
    this.physics = physics;
    this.chemistry = chemistry;
    this.score = 0;
  }
  calculateAverageScore() {
    const scoreTB =
      (Number(this.math) + Number(this.physics) + Number(this.chemistry)) / 3;
    this.score = scoreTB.toFixed(2);
  }
}
