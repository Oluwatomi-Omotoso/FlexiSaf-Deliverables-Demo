// 🔹 Fields (constants at script level)
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "1234";

function checkLogin() {
  // 🔹 Variables (inside function)
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // 🔹 If/Else
  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    document.getElementById("result").textContent = "Login successful!";
    document.getElementById("result").classList.toggle("active");
  } else {
    document.getElementById("result").textContent = "Invalid credentials.";
    document.getElementById("result").classList.toggle("active");
  }
}
