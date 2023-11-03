import Person from "./Person.js";
export default class Customer extends Person {
  constructor(id, name, email, address, chucVu, companyName, bill, rate) {
    super(id, name, email, address, chucVu);
    this.companyName = companyName;
    this.bill = bill;
    this.rate = rate;
  }
}
