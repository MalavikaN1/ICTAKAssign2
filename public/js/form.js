let email = document.getElementById("email");
let error = document.getElementById("error");
let pwd = document.getElementById("pwd");

let regexp =/^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
let regpas =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{7,}$/
// let regpas =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/
if((regexp.test(email.value))&&(pwd.value.length>=8)&&(regpas.test(pwd.value))){
    error.innerHTML="VALID";
    error.style.color="green";
    return true;
}
else{
    error.innerHTML="INVALID";
    error.style.color="red";
    return false;
}