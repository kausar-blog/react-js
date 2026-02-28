const headingEl = document.querySelector("#heading");
const allDetailsEl = document.querySelector("#allDetails");
const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const buttonInEl = document.querySelector("#button_in");
const buttonOutEl = document.querySelector("#button_out");
const imgEl = document.querySelector("#img");

const informationEl = document.querySelector("#information");
const outputNameEl = document.querySelector("#outputName");
const outputEmailEl = document.querySelector("#outputEmail");

buttonInEl.addEventListener("click", (e) => {
  e.preventDefault();

  const fields = [
    { el: nameEl, msg: "Please enter the name" },
    { el: emailEl, msg: "Please enter the email" },
    { el: passwordEl, msg: "Please enter the password" },
  ];
  for (const field of fields) {
    if (field.el.value.trim() === "") {
      alert(field.msg);
      field.el.focus();

      return;
    }
  }

  imgEl.style.display = "block";
  buttonInEl.style.display = "none";
  buttonOutEl.style.display = "block";

  outputNameEl.innerHTML = nameEl.value;
  outputEmailEl.innerHTML = emailEl.value;

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
