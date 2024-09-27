function validateForm() {
    var name = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var dob = document.getElementById("dob").value;
    var agreement = document.getElementById("agreement").checked;
  
    var errors = [];

    if (name.length < 6) {
        errors.push("Name must be at least 6 characters long.");
    }

    if (!email.endsWith("@gmail.com")) {
        errors.push("Email must end with @gmail.com.");
    }

    if (password.length < 8 || !checkAlphaNum(password)) {
        errors.push("Password must be at least 8 characters long and contain both letters and numbers.");
    }

    if (confirmPassword !== password) {
        errors.push("Confirm password must match the password.");
    }

    if (new Date(dob) > new Date()) {
        errors.push("Date of Birth must not exceed the current date.");
    }

    if (!agreement) {
        errors.push("You must agree to the EULA.");
    }

    var errorContainer = document.getElementById("errors");
    errorContainer.innerHTML = "";

    if (errors.length > 0) {
        for (var i = 0; i < errors.length; i++) {
            var error = document.createElement("p");
            error.className = "error";
            error.textContent = errors[i];
            errorContainer.appendChild(error);
        }
    } else {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset();
    }
}

function checkAlphaNum(str) {
    var isAlphabet = false;
    var isNumeric = false;

    for (var i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            isAlphabet = true;
        } else {
            isNumeric = true;
        }
    }

    return isAlphabet && isNumeric;
}
