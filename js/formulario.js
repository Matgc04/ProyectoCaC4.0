// Tutorial - https://youtu.be/VufN46OyFng

// Targetting all classes & id from HTML

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("name"),
  email = id("email"),
  subject = id("subject"),
  form = id("form"),
  errorMsg = classes("error");

// Adding the submit event Listener

id("formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "El nombre no puede estar vacío");
  engine(email, 1, "El email no puede estar vacío");
  //engine(email, 1, "El email no es válido");
  engine(subject, 2, "El asunto no puede esta vacío");
  engine(message, 3, "El mensaje no puede estar vacío")
});


let engine = (id, serial, message) => {

  if (id.value.trim() === "" ) {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

  } else {
    if (id==email && !(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(id.value))){
      errorMsg[serial].innerHTML =  "El email no es válido";
      id.style.border = "2px solid red";
    }
    else{
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";}
  }
};