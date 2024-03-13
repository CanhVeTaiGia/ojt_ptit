let users = JSON.parse(localStorage.getItem("users")) || [];
const names = document.getElementById("inputn");
const email = document.getElementById("inpute");
const password = document.getElementById("inputp");
const repassword = document.getElementById("inputrp");

const errorName = document.getElementById("errorName");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");
const errorRepassword = document.getElementById("errorRepassword");
const errorAccount = document.getElementById("errorAcc");

function checkEmail(email) {
  //nhận diện email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let flag = true;
  if (names.value === "") {
    setTimeout(() => {
      errorName.style.display = "none";
      names.style.borderColor = "#f0f0f0";
    }, 3000);
    flag = false;
    errorName.innerHTML = `Tên không được để trống`;
    names.style.borderColor = "#d65d00";
    errorName.style.display = "flex";
  }
  if (email.value === "") {
    setTimeout(() => {
      errorEmail.style.display = "none";
      email.style.borderColor = "#f0f0f0";
    }, 3000);
    errorEmail.innerHTML = `Email không được để trống`;
    email.style.borderColor = "#d65d00";
    errorEmail.style.display = "flex";
  }
  if (!checkEmail(email.value)) {
    setTimeout(() => {
      errorEmail.style.display = "none";
      email.style.borderColor = "#f0f0f0";
    }, 3000);
    errorEmail.innerHTML = "Email không đúng định dạng";
    email.style.borderColor = "#d65d00";
    errorEmail.style.display = "flex";
    flag = false;
  }
  if (password.value < 8) {
    setTimeout(() => {
      errorPassword.style.display = "none";
      password.style.borderColor = "#f0f0f0";
    }, 3000);
    flag = false;
    password.style.borderColor = "#d65d00";
    errorPassword.innerHTML = `Mật khẩu phải lớn hơn 8 chữ số`;
    errorPassword.style.display = "flex";
  }
  if (password.value === "") {
    setTimeout(() => {
      errorPassword.style.display = "none";
      password.style.borderColor = "#f0f0f0";
    }, 3000);
    flag = false;
    password.style.borderColor = "#d65d00";
    errorPassword.innerHTML = `Mật khẩu không được trống`;
    errorPassword.style.display = "flex";
  }
  if (repassword.value === "") {
    setTimeout(() => {
      errorRepassword.style.display = "none";
      repassword.style.borderColor = "#f0f0f0";
    }, 3000);
    flag = false;
    repassword.style.borderColor = "#d65d00";
    errorRepassword.innerHTML = `Mật khẩu xác nhận không được trống`;
    errorRepassword.style.display = "flex";
  }
  if (repassword.value !== password.value) {
    setTimeout(() => {
      errorRepassword.style.display = "none";
    }, 3000);
    flag = false;
    errorRepassword.innerHTML = `Mật khẩu không khớp với mật khẩu vừa nhập`;
    errorRepassword.style.display = "flex";
  }
  console.log(flag);
  if (flag === true) {
    let obj = {
      id: Math.floor(Math.random() * 100000000),
      names: names.value,
      email: email.value,
      password: password.value,
      cart: [],
    };
    if (users.length > 0) {
      for (let i = 0; i < users.length; i++) {
        if (
          obj.id === users[i].id ||
          obj.names === users[i].names ||
          obj.email === users[i].email
        ) {
          setTimeout(() => {
            errorAccount.style.display = "none";
          }, 3000);
          errorAccount.style.display = "flex";
        }
        else{
          users.push(obj);
          localStorage.setItem("users", JSON.stringify(users));
          window.location.href = "./signin.html";
        }
      }
    } else {
      users.push(obj);
      localStorage.setItem("users", JSON.stringify(users));
      window.location.href = "./signin.html";
    }
  } else {
    return;
  }
});

// let input = document.querySelector("input");
// input.addEventListener("input", function(){
//   this.style.border= "2px solid red";
// });

// input.addEventListener("mouseout", function() {
//   this.style.border= "1px solid #bbb";
// });
