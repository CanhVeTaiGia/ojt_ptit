let users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users);
// const names = document.getElementById("name")
const email = document.getElementById("email");
const password = document.getElementById("password");
const wrongEmail = document.getElementById("wrongEmail");
const wrongPassword = document.getElementById("wrongPassword");
const form = document.getElementById("form");

function checkEmail(email, b) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let b = true;
  if (email.value === "") {
    wrongEmail.innerHTML = "Nhập địa chỉ email";
    wrongEmail.style.display = "flex";
    setTimeout(() => {
      wrongEmail.style.display = "none";
    }, 3000);
    return;
  }
  if (password.value === "") {
    wrongPassword.style.display = "flex";
    wrongPassword.innerHTML = "Nhập mật khẩu";
    b = false;
    setTimeout(() => {
      wrongPassword.style.display = "none";
    }, 3000);
    return;
  }
  for (let i = 0; i < users.length; i++) {
    if (email.value === users[i].email && password.value == users[i].password) {
      email.value = "";
      password.value = "";
      let currentUser = []
      let obj = {
        id: users[i].id,
        names: users[i].names,
        email: users[i].email,
        password: users[i].password
      };
      if(currentUser = []){
        currentUser.push(obj);
      }else{
        currentUser.slice(1, 1, obj)
      }
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      window.location.href = "../utils/index.html";
      break;
    }
  }
});
