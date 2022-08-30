console.log("PROJECT: SIGN UP FORM");

let password = document.getElementById("password");
let confirmPass = document.getElementById("confirm_password");
let warning = document.getElementById("password_warning");

passwordError();

document.addEventListener('keydown', function (event) {
    passwordError();
});

let getSpan = document.getElementsByTagName('span');

function passwordError() {
    if (password.value === confirmPass.value) {
        if (password.value === "") {
            password.classList.add('password_error');
            confirmPass.classList.add('password_error');
            warning.style.color = "red";
        } else {
            password.classList.add('password_match');
            confirmPass.classList.add('password_match');
            warning.style.color = "white";
        }
    } else {
        confirmPass.classList.remove('password_match');
        password.classList.remove('password_match');
        password.classList.add("password_error");
        confirmPass.classList.add("password_error");
        warning.style.color = "red";
    }
}