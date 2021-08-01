
//////////////// Password Show Hide

function password_show_hide() {
  var x = document.getElementById("password");
  var show_eye = document.getElementById("show_eye");
  var hide_eye = document.getElementById("hide_eye");
  hide_eye.classList.remove("d-none");
  if (x.type === "password") {
    x.type = "text";
    show_eye.style.display = "none";
    hide_eye.style.display = "block";
  } else {
    x.type = "password";
    show_eye.style.display = "block";
    hide_eye.style.display = "none";
  }
}

///////////////////////////////////////////////////

/////////////////Carousel (Bootstrap)

$('.carousel').carousel({
interval: 2000
})

///////////////////////////////////////////////////

/////////////////Snackbar Function 

var snackbarError = document.getElementById("snackbarError");

function snackbarClose() {  
  snackbarError.classList.add("d-none");
}


/////////////////////////////////////////////

////////////// Login Functionality

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
  
  
  e.preventDefault();
  
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var snackbarError = document.getElementById("snackbarError");
  var snackbarSuccess = document.getElementById("snackbarSuccess");
  var user = document.getElementById("email");
  var pass = document.getElementById("password");
  var userIcon = document.getElementById("userIcon");
  var userIconField = document.getElementById("userIconField");
  var keyField = document.getElementById("keyField");
  var keyIcon = document.getElementById("keyIcon");
  var eyeField = document.getElementById("eyeField");


fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
    }),
  })

  .then(function(response){
    console.log(response.ok);

    if (response.ok === true){

    snackbarSuccess.classList.remove("d-none");
    window.location.href="main.html";

  } else if (user.checkValidity() == false){

    user.classList.add("is-invalid");
    userIcon.classList.add("is-invalid-icon");
    userIconField.classList.add("is-invalid");

  } else if (password.length < 4) {

    pass.classList.add("is-invalid");
    keyField.classList.add("is-invalid");
    keyIcon.classList.add("is-invalid-icon");
    eyeField.classList.add("is-invalid");

  } else {
    snackbarError.classList.remove("d-none");
 
  }
  })

})

//////////////////////////////////////////////////////////