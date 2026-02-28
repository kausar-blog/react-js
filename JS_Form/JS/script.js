const headingEl = document.querySelector("#heading");
const allDetailsEl = document.querySelector("#allDetails");
const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const buttonInEl = document.querySelector("#button_in");
const buttonOutEl = document.querySelector("#button_out");
const imgEl = document.querySelector("#img");

const outputNameEl = document.querySelector("#outputName");
const outputEmailEl = document.querySelector("#outputEmail");

const informationEl = document.querySelector("#information");

buttonInEl.addEventListener("click", (e) => {
  e.preventDefault();

  if (nameEl.value.trim() === "") {
    alert("Please enter your Name");
    nameEl.focus();
    return;
  }
  if (emailEl.value.trim() === "") {
    alert("Please enter your Email");
    emailEl.focus();
    return;
  }
  if (passwordEl.value.trim() === "") {
    alert("Please enter your Password");
    passwordEl.focus();
    return;
  }

  imgEl.style.display = "block";

  buttonInEl.style.display = "none";

  buttonOutEl.style.display = "block";

  outputNameEl.innerHTML = nameEl.value;
  outputEmailEl.innerHTML = emailEl.value;

  nameEl.value = "";
  emailEl.value = "";
  passwordEl.value = "";

  allDetailsEl.style.display = "none";
  headingEl.innerHTML = "Welcome";

  informationEl.style.display = "block";
});

buttonOutEl.addEventListener("click", (e) => {
  e.preventDefault();

  imgEl.style.display = "none";

  headingEl.innerHTML = "Login Form";
  allDetailsEl.style.display = "block";

  buttonInEl.style.display = "block";

  buttonOutEl.style.display = "none";

  informationEl.style.display = "none";

  outputNameEl.innerHTML = "";
  outputEmailEl.innerHTML = "";
});
