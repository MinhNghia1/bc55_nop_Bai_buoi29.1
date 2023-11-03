import Person from "./Person.js";

export default class Employee extends Person {
  constructor(id, name, email, address, chucVu, day, salary) {
    super(id, name, email, address, chucVu);
    this.day = day;
    this.salary = salary;
    this.TotalSalary = 0;
  }
  payrollforstaff() {
    const numberDay = Number(this.day) * Number(this.salary);
    this.TotalSalary = numberDay;
  }
}
