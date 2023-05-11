function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var toggleButton = document.querySelector(".toggle-password i");

    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleButton.classList.remove("fa-eye-slash");
      toggleButton.classList.add("fa-eye");
    } else {
      passwordField.type = "password";
      toggleButton.classList.remove("fa-eye");
      toggleButton.classList.add("fa-eye-slash");
    }
  }