function loadUser() {
  const user = localStorage.getItem("username");

  const brand = document.getElementById("brandName");
  const login = document.getElementById("loginLink");
  const register = document.getElementById("registerLink");
  const logoutBtn = document.getElementById("logoutBtn");

    if (user) {
    // logged in
    if (brand) {
      brand.href = "home.html";
    }
    if (login) {
      login.style.display = "none";
    }
    if (register) {
      register.style.display = "none";
    }
    if (logoutBtn) {
      logoutBtn.style.display = "block";
    }
    } else {
    // not logged in
    if (brand) {
      brand.href = "index.html";
    }
    if (login) {
      login.style.display = "block";
    }
    if (register) {
      register.style.display = "block";
    }
    if (logoutBtn) {
      logoutBtn.style.display = "none";
    }
    }

  if (!user) {
    // not logged in → go back
    window.location.href = "index.html";
    return;
  }

  // show username everywhere
  const navUser = document.getElementById("navUsername");
  if (navUser) {
    navUser.innerText = user;
  }
}

function logout() {
  localStorage.removeItem("username");
  window.location.href = "index.html";
}


function register() {
    const name = document.getElementById("name").value;
    if (name === "") {
        alert("Please enter your name");
        return;
    }
    localStorage.setItem("username", name);
    alert("Registration successful");
    window.location.href = "home.html";
}
function login() {
    const name = document.getElementById("name").value;
    if (name === "") {
        alert("Please enter your name");
        return;
    }
    localStorage.setItem("username", name);
    alert("Login successful");
    window.location.href = "home.html";
}


