export default class ListPerson {
  constructor() {
    this.arrayPerson = [];
  }

  pushArray(person) {
    this.arrayPerson.push(person);
  }

  deleteUser(id) {
    const persons = this.arrayPerson;
    const index = persons.findIndex((person) => person.id === id);
    if (index !== -1) {
      this.arrayPerson.splice(index, 1);
    }
    return null;
  }
  getInfoUserOfIdUser(id) {
    const index = this.arrayPerson.findIndex((person) => person.id === id);
    if (index !== -1) {
      return this.arrayPerson[index];
    }
    return null;
  }
  updateUser(persons) {
    const index = this.arrayPerson.findIndex(
      (person) => person.id == persons.id
    );
    console.log(index);
    if (index !== -1) {
      this.arrayPerson[index] = persons;
    }
  }
}
