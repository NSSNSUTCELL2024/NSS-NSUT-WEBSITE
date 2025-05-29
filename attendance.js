const loginContainer = document.getElementById("login-container");
const signUpButton = document.getElementById("signUp"); // Admin Login button
const signInButton = document.getElementById("signIn"); // User Login button

signUpButton.addEventListener("click", () => {
  loginContainer.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  loginContainer.classList.remove("right-panel-active");
});
