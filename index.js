const formEl = document.querySelector("form");
let usernameError = document.querySelector("#usernameError");
let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");
let confirmPasswordError = document.querySelector("#confirmPasswordError");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.disabled = true;

formEl.addEventListener("input", handleFormInputs);
formEl.addEventListener("submit", handleFormSubmit);

function handleFormInputs() {
  const username = formEl.querySelector("#username");
  const email = formEl.querySelector("#email");
  const password = formEl.querySelector("#password");
  const confirmPassword = formEl.querySelector("#confirmPassword");

  // username validation
  const userValid = validateInput(
    /^[a-zA-Z\s]{3,20}$/,
    username,
    usernameError
  );

  // email validation
  const emailValid = validateInput(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    email,
    emailError
  );

  // password validation
  const passwordValid = validateInput(
    /^[\w\#\@\$\%\&\*\!]{8,20}$/,
    password,
    passwordError
  );

  if (!(password.value === confirmPassword.value)) {
    confirmPasswordError.textContent = "Passwords do not match";
    return;
  } else {
    confirmPasswordError.textContent = "";
  }

  if (
    userValid &&
    emailValid &&
    passwordValid &&
    password.value === confirmPassword.value
  )
    submitBtn.disabled = false;
}

function handleFormSubmit(e) {
  e.preventDefault();
  alert("Form submitted successfully");
  formEl.reset();
  submitBtn.disabled = true;
}

function validateInput(regex, input, errMsg) {
  let error = "";
  if (input.id === "username") {
    error = "Username must be 3-20 alphabetic characters";
  } else if (input.id === "email") {
    error = "Email should be valid";
  } else if (input.id === "password") {
      error = "Password must be 8-20 chars with: 1 uppercase, 1 lowercase, 1 number, and 1 special character (!@#$%^&*)";
  }

  if (!regex.test(input.value)) {
    errMsg.textContent = error;
    return false;
  } else {
    errMsg.textContent = "";
    return true;
  }
}
