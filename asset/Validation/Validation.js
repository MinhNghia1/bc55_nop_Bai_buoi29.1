export default class Validation {
  constructor() {}
  kiemTraRong(value, idCanhBao, mess) {
    const dom = document.getElementById(idCanhBao);
    if (value === "") {
      dom.style.display = "block";
      dom.innerHTML = mess;
      return false;
    } else {
      dom.innerHTML = "";
      return true;
    }
  }

  kiemTraEmail(value, idCanhBao, mess) {
    var theDom = document.getElementById(idCanhBao);
    var regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var isvalid = regexEmail.test(value);
    if (!isvalid) {
      theDom.innerHTML = mess;
      theDom.style.display = "block";
      return false;
    } else {
      theDom.innerHTML = "";
      return true;
    }
  }
  kiemTraDoDai(value, max, min, idCanhBao, mess) {
    var theDom = document.getElementById(idCanhBao);
    if (value.length > max || value.length < min) {
      theDom.innerHTML = mess;
      theDom.style.display = "block";
      return false;
    } else {
      theDom.innerHTML = "";
      return true;
    }
  }
  kiemTraSelect(value, idCanhBao, mess) {
    var theDom = document.getElementById(idCanhBao);
    var theSelect = document.getElementById(value).selectedIndex;
    if (theSelect === 0) {
      theDom.innerHTML = mess;
      theDom.style.display = "block";
      return false;
    } else {
      theDom.innerHTML = "";
      return true;
    }
  }
  kiemTraGioiHan(value, idCanhBao, mess) {
    var theDom = document.getElementById(idCanhBao);
    if (value >= 1 && value <= 10) {
      theDom.innerHTML = "";
      return true;
    } else {
      theDom.innerHTML = mess;
      theDom.style.display = "block";
      return false;
    }
  }
}
