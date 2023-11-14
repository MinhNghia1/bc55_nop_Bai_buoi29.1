import Person from "../Model/Person.js";
import Customer from "../Model/Customer.js";
import Employee from "../Model/Employee.js";
import Student from "../Model/Student.js";
import ListPerson from "../Model/ListPerson.js";
import Validation from "../asset/Validation/Validation.js";
const listPerson = new ListPerson();
const validation = new Validation();
getLocalStorage();
document.getElementById("chucvu").onchange = function () {
  const domSelectedCV = document.getElementById("chucvu").selectedIndex;
  if (domSelectedCV == 0) {
    document.getElementById("student_math").style.display = "none";
    document.getElementById("student_physics").style.display = "none";
    document.getElementById("student_chemistry").style.display = "none";
    document.getElementById("employee_day").style.display = "none";
    document.getElementById("employee_salary").style.display = "none";
    document.getElementById("customer_company").style.display = "none";
    document.getElementById("customer_bill").style.display = "none";
    document.getElementById("customer_rate").style.display = "none";
  } else if (domSelectedCV == 1) {
    document.getElementById("student_math").style.display = "block";
    document.getElementById("student_physics").style.display = "block";
    document.getElementById("student_chemistry").style.display = "block";
    document.getElementById("employee_day").style.display = "none";
    document.getElementById("employee_salary").style.display = "none";
    document.getElementById("customer_company").style.display = "none";
    document.getElementById("customer_bill").style.display = "none";
    document.getElementById("customer_rate").style.display = "none";
  } else if (domSelectedCV == 2) {
    document.getElementById("student_math").style.display = "none";
    document.getElementById("student_physics").style.display = "none";
    document.getElementById("student_chemistry").style.display = "none";
    document.getElementById("employee_day").style.display = "block";
    document.getElementById("employee_salary").style.display = "block";
    document.getElementById("customer_company").style.display = "none";
    document.getElementById("customer_bill").style.display = "none";
    document.getElementById("customer_rate").style.display = "none";
  } else {
    document.getElementById("student_math").style.display = "none";
    document.getElementById("student_physics").style.display = "none";
    document.getElementById("student_chemistry").style.display = "none";
    document.getElementById("employee_day").style.display = "none";
    document.getElementById("employee_salary").style.display = "none";
    document.getElementById("customer_company").style.display = "block";
    document.getElementById("customer_bill").style.display = "block";
    document.getElementById("customer_rate").style.display = "block";
  }
};
function getInfoUser() {
  const domId = document.getElementById("id_user").value;
  const domTen = document.getElementById("name").value;
  const domEmail = document.getElementById("email").value;
  const domAddress = document.getElementById("address").value;
  const domChucvu = document.getElementById("chucvu").value;
  const domMath = document.getElementById("math").value;
  const domPhysics = document.getElementById("physics").value;
  const domChemistry = document.getElementById("chemistry").value;
  const domDay = document.getElementById("day").value;
  const domSalary = document.getElementById("salary").value;
  const domCompany = document.getElementById("company").value;
  const domBill = document.getElementById("bill").value;
  const domRate = document.getElementById("rate").value;
  const domSelectedCV = document.getElementById("chucvu").selectedIndex;

  let isValid = true;
  isValid &= validation.kiemTraRong(domId, "tbID", "Yêu cầu không bỏ trống");
  isValid &= validation.kiemTraRong(domTen, "tbTen", "Yêu cầu không bỏ trống");
  isValid &=
    validation.kiemTraRong(domEmail, "tbEmail", "Yêu cầu không bỏ trống") &&
    validation.kiemTraEmail(domEmail, "tbEmail", "Yêu cầu nhập đúng đinh dạng");
  isValid &= validation.kiemTraRong(
    domAddress,
    "tbAddress",
    "Yêu cầu không bỏ trống"
  );
  isValid &= validation.kiemTraSelect(
    "chucvu",
    "tbChucVu",
    "Yêu cầu chọn chức vụ"
  );

  if (domChucvu === "Student") {
    isValid &=
      validation.kiemTraRong(domMath, "tbToan", "Yêu cầu không bỏ trống") &&
      validation.kiemTraGioiHan(domMath, "tbToan", "chi nhap tu 1 -> 10");
    isValid &=
      validation.kiemTraRong(
        domPhysics,
        "tbphysics",
        "Yêu cầu không bỏ trống"
      ) &&
      validation.kiemTraGioiHan(domPhysics, "tbphysics", "chi nhap tu 1 -> 10");
    isValid &=
      validation.kiemTraRong(
        domChemistry,
        "tbchemistry",
        "Yêu cầu không bỏ trống"
      ) &&
      validation.kiemTraGioiHan(
        domChemistry,
        "tbchemistry",
        "chi nhap tu 1 -> 10"
      );
  } else if (domChucvu === "Employee") {
    isValid &= validation.kiemTraRong(
      domDay,
      "tbday",
      "Yêu cầu không bỏ trống"
    );
    isValid &= validation.kiemTraRong(
      domSalary,
      "tbsalary",
      "Yêu cầu không bỏ trống"
    );
  } else if (domChucvu === "Customer") {
    isValid &= validation.kiemTraRong(
      domCompany,
      "tbTencompany",
      "Yêu cầu không bỏ trống"
    );
    isValid &= validation.kiemTraRong(
      domBill,
      "tbbill",
      "Yêu cầu không bỏ trống"
    );
    isValid &= validation.kiemTraSelect(
      "rate",
      "tbrate",
      "Yêu cầu chọn đánh giá"
    );
  }

  if (!isValid) {
    return null;
  }
  if (domSelectedCV == 0) {
    const person = new Person(domId, domTen, domEmail, domAddress, domChucvu);
    return person;
  } else if (domSelectedCV == 1) {
    const student = new Student(
      domId,
      domTen,
      domEmail,
      domAddress,
      domChucvu,
      domMath,
      domPhysics,
      domChemistry
    );
    student.calculateAverageScore();
    return student;
  } else if (domSelectedCV == 2) {
    const employee = new Employee(
      domId,
      domTen,
      domEmail,
      domAddress,
      domChucvu,
      domDay,
      domSalary
    );
    employee.payrollforstaff();
    return employee;
  } else {
    const customer = new Customer(
      domId,
      domTen,
      domEmail,
      domAddress,
      domChucvu,
      domCompany,
      domBill,
      domRate
    );
    return customer;
  }
}
document.getElementById("btnAdd1").onclick = function () {
  document.getElementById("id_user").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.getElementById("chucvu").value = "Default";
  document.getElementById("math").value = "";
  document.getElementById("physics").value = "";
  document.getElementById("chemistry").value = "";
  document.getElementById("day").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("company").value = "";
  document.getElementById("bill").value = "";

  document.getElementById("modal__footer").innerHTML = `
  <button class="btn btn-success" id="add_person">Add</button>
  `;
};
document.getElementById("exampleModal").onclick = function (event) {
  if (event.target.id !== "add_person") {
    return null;
  }
  const persons = getInfoUser();
  if (persons) {
    listPerson.pushArray(persons);
    document.getElementsByClassName("close")[0].click();
    renderPerson(listPerson.arrayPerson);
    setLocalSTorage(listPerson.arrayPerson);
  }
};
function renderPerson(persons) {
  const domSelected = document.getElementById("select_show_info").value;
  const html = persons.reduce((prev, person, index) => {
    return (
      prev +
      `<tr>
    <td>${person.id}</td>
    <td>${person.name}</td>
    <td>${person.address}</td>
    <td>${person.email}</td>
    <td>${person.chucVu}</td>
    <td>
    <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal" id="repairBtn" idPerson="${person.id}">Repair</button>
    <button class="btn btn-danger mt-2" id="deleteBtn" idPerson="${person.id}">Delete</button>
    </td>
    `
    );
  }, "");
  if (domSelected === "Default") {
    document.getElementById("tbody_show2").innerHTML = html;
  }
}
document.getElementById("select_show_info").onchange = function (event) {
  const checkSelected = event.target.value;
  const persons = listPerson.arrayPerson;
  const tbody2 = document.getElementById("tbody_show2");
  let html = "";
  renderThead();

  persons.filter((person) => {
    if (person.chucVu === checkSelected) {
      html += changeElementHtml(person, checkSelected);
    } else if (checkSelected === "Default") {
      html += changeElementHtml(person, checkSelected);
    }
  });
  tbody2.innerHTML = html;
};

function changeElementHtml(person, checkSelected) {
  if (checkSelected === "Default") {
    return `<tr>
    <td>${person.id}</td>
    <td>${person.name}</td>
    <td>${person.address}</td>
    <td>${person.email}</td>
    <td>${person.chucVu}</td>
    <td>
    <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal" id="repairBtn" idPerson="${person.id}">Repair</button>
    <button class="btn btn-danger mt-2" id="deleteBtn" idPerson="${person.id}">Delete</button>
    </td>
    `;
  } else if (checkSelected === "Student") {
    return `
    <tr>
    <td>${person.id}</td>
    <td>${person.name}</td>
    <td>${person.address}</td>
    <td>${person.email}</td>
    <td>${person.chucVu}</td>
    <td>${person.math}</td>
    <td>${person.physics}</td>
    <td>${person.chemistry}</td>
    <td>${person.score}</td>
    <td>
    <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal" id="repairBtn" idPerson="${person.id}">Repair</button>
    <button class="btn btn-danger mt-2" id="deleteBtn" idPerson="${person.id}">Delete</button>
    </td>
    </tr>
    `;
  }
  return ` <tr>
       <td>${person.id}</td>
       <td>${person.name}</td>
       <td>${person.address}</td>
       <td>${person.email}</td>
       <td>${person.chucVu}</td>
       <td>${person.day || person.companyName}</td>
       <td>${person.salary || person.bill}</td>
       <td>${person.TotalSalary || person.rate}</td>
       <td>
       <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal" id="repairBtn" idPerson="${
         person.id
       }">Repair</button>
    <button class="btn btn-danger mt-2" id="deleteBtn" idPerson="${
      person.id
    }">Delete</button>
       </td>
       </tr>`;
}
function renderThead() {
  const domSelected = document.getElementById("select_show_info").selectedIndex;
  if (domSelected == 0) {
    document.getElementById("thead_show").innerHTML = `<tr class="text-center">
    <th>ID</th>
    <th>Họ và Tên</th>
    <th>Email</th>
    <th>Address</th>
    <th>Loại khách Hàng</th>
    <td>
      <i class="fa-solid fa-gear"></i>
    </td>
  </tr>`;
  } else if (domSelected == 1) {
    document.getElementById("thead_show").innerHTML = `<tr class="text-center">
    <th>ID</th>
    <th>Họ và Tên</th>
    <th>Email</th>
    <th>Address</th>
    <th>Loại khách Hàng</th>
    <th>Toán</th>
    <th>Lý</th>
    <th>Hóa</th>
    <th>Điểm Tb</th>
    <td>
      <i class="fa-solid fa-gear"></i>
    </td>
  </tr>`;
  } else if (domSelected == 2) {
    document.getElementById("thead_show").innerHTML = `<tr class="text-center">
    <th>ID</th>
    <th>Họ và Tên</th>
    <th>Email</th>
    <th>Address</th>
    <th>Loại khách Hàng</th>
    <th>Số Ngày Làm</th>
    <th>Lương Theo Ngày</th>
    <th>Lương</th>
    <td>
      <i class="fa-solid fa-gear"></i>
    </td>
  </tr>`;
  } else if (domSelected == 3) {
    document.getElementById("thead_show").innerHTML = `<tr class="text-center">
    <th>ID</th>
    <th>Họ và Tên</th>
    <th>Email</th>
    <th>Address</th>
    <th>Loại khách Hàng</th>
    <th>Tên Công Ty</th>
    <th>Giá Trị Hóa Đơn</th>
    <th>Đánh Giá</th>
    <td>
      <i class="fa-solid fa-gear"></i>
    </td>
  </tr>`;
  }
}
function setLocalSTorage(arr) {
  //chuyen data  ve string
  const dataString = JSON.stringify(arr);
  localStorage.setItem("Person", dataString);
}
function getLocalStorage() {
  if (localStorage.getItem("Person")) {
    const dataString = localStorage.getItem("Person");
    const dataJson = JSON.parse(dataString);
    listPerson.arrayPerson = dataJson;
    renderPerson(listPerson.arrayPerson);
  }
}

document.getElementById("tableListenEvent").onclick = function (event) {
  const getId = event.target.getAttribute("idPerson");
  if (event.target.id === "deleteBtn") {
    listPerson.deleteUser(getId);
    setLocalSTorage(listPerson.arrayPerson);
    renderPerson(listPerson.arrayPerson);
  } else if (event.target.id === "repairBtn") {
    document.getElementById("exampleModalLabel").innerHTML = "Repair";
    document.getElementsByClassName(
      "modal-footer"
    )[0].innerHTML = `<button class="btn btn-success" id="update_btn">Update</button>`;
    const person = listPerson.getInfoUserOfIdUser(getId);
    console.log(person);
    if (person) {
      document.getElementById("id_user").value = person.id;
      // document.getElementById("id_user").disabled = true;
      document.getElementById("name").value = person.name;
      document.getElementById("email").value = person.email;
      document.getElementById("address").value = person.address;
      document.getElementById("math").value = person.math;
      document.getElementById("physics").value = person.physics;
      document.getElementById("chemistry").value = person.chemistry;
      document.getElementById("day").value = person.day;
      document.getElementById("salary").value = person.salary;
      document.getElementById("company").value = person.companyName;
      document.getElementById("bill").value = person.bill;
      document.getElementById("rate").value = person.rate;
    }
  }
};
document.getElementById("modal__footer").onclick = function (event) {
  if (event.target.id !== "update_btn") {
    return;
  }
  const person = getInfoUser();
  if (person) {
    document.getElementsByClassName("close")[0].click();
    listPerson.updateUser(person);
    renderPerson(listPerson.arrayPerson);
    setLocalSTorage(listPerson.arrayPerson);
  }
};

document.getElementById("sap_xep_ten").onchange = function () {
  const domselect = document.getElementById("sap_xep_ten").selectedIndex;
  const cloneArr = listPerson.arrayPerson;
  if (domselect == 1) {
    let sapXepArr = cloneArr.sort((infoUserNext, infoUser) => {
      let tenInfouserNext = infoUserNext.name.toLowerCase();
      let tenInfoUser = infoUser.name.toLowerCase();
      if (tenInfouserNext > tenInfoUser) {
        return 1; // giu nguyen
      } else if (tenInfouserNext < tenInfoUser) {
        return -1;
      }
      return 1;
    });
    renderPerson(sapXepArr);
  } else {
    renderPerson(listPerson.arrayPerson);
  }
};
