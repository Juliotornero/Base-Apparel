function validarEmail(email) {
  
  var expReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  var esValido = expReg.test(email);

  var error = document.getElementById("error");
  error.style.color = "red";

  var correct = document.getElementById("correct");
  correct.style.color = "green";



  var mensageError = [];
  var mensageCorrect = [];

  if (esValido == true) {

    var email = document.getElementById("email");
    email.style.border="2px solid rgba(45, 221, 45, 0.658)";

    var icon = document.getElementById("icon");
    icon.style.display="none";

    mensageCorrect.push("Submitted successfully !");

  } else {

    var email = document.getElementById("email");
    email.style.border="2px solid red";
    
    var icon = document.getElementById("icon");
    icon.style.display="inline-block";

    mensageError.push("Please provide a valid email !");
  }

  error.innerHTML = mensageError.join("");
  correct.innerHTML = mensageCorrect.join("");
}
