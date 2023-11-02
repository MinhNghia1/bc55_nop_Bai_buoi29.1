import Person from "./Person.js";
export default class Customer extends Person {
  constructor(id, name, address, email, chucVu, companyName, bill, rate) {
    super(id, name, address, email, chucVu);
    this.companyName = companyName;
    this.bill = bill;
    this.rate = rate;
  }
}
