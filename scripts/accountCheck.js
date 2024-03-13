const currentUser = JSON.parse(localStorage.getItem('currentUser')) || [];
console.table(currentUser);

const signup = document.getElementById("signup");
const signin = document.getElementById("signin");
const signout = document.getElementById("signouts");
const signupParent = document.getElementById("signup-parent");
const signinParent = document.getElementById("signin-parent");
const userName = document.getElementById("user-name");
const signoutParent = document.getElementById("signout-parents")
accountCheck();

function accountCheck(){
    if(currentUser.length !==0 ){
        signin.style.display = "none";
        signinParent.style.display = "none";
        signup.style.display = "none";
        signupParent.style.display = "none";
        userName.innerHTML = currentUser[0].names;
        userName.style.display = "inline";
        signout.style.display = "inline";
        signoutParent.style.display = "inline";
    }if(currentUser.length === 0){
        signin.style.display = "inline";
        signinParent.style.display = "inline";
        signup.style.display = "inline";
        signupParent.style.display = "inline";
        userName.style.display = "none";
        signoutParent.style.display = "none";
        signout.style.display = "none";
    }
}
