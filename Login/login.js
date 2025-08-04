// autofill credentials 
document.addEventListener("DOMContentLoaded", function () {
    const savedHRID = localStorage.getItem("savedHRID");
    // checks if the user's information is saved or not, if yes then it is in the HR input field
    if (savedHRID) {
        document.getElementById('hrid').value = savedHRID;
        document.getElementById('rememberMe').checked = true;
    }

    // handle 'Forgot Password?' click
    const forgotLink = document.querySelector(".forgetPass a");

    forgotLink.addEventListener("click", function (e) {
        e.preventDefault(); // Stop the default link behavior

        const enteredHRID = prompt("Enter your registered HR ID to receive a password reset link:");

        if (enteredHRID) {
            // Simulate reset process (replace with real backend logic if needed)
            alert("A password reset link has been sent to the registered email for HR ID: " + enteredHRID);
        } else {
            alert("Reset request cancelled.");
        }
    });

    

    // toggle show/hide password
    const showPasswordCheckbox = document.getElementById("showPassword");
    const passwordField = document.getElementById("password");
    const togglePass = document.querySelector(".toggle-password");

    showPasswordCheckbox.addEventListener("change", function () {
        passwordField.type = this.checked ? "text" : "password";
    });
     
});

// login html to login js
document.getElementById("loginForm").addEventListener("submit", function (event) {
    // preventDefault prevents the page from reloading
    event.preventDefault();

    // gets the user's details
    const hrId = document.getElementById("hrid").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById('rememberMe').checked;

    if (hrId === "Admin123" && password === "HR12345") {
        if (rememberMe) {
            localStorage.setItem("rememberedHRID", hrId);
        } else {
            localStorage.removeItem("rememberedHRID");
        }
        // changes the current webpage to a new redirected webpage without using the back button to go back to the login page
        window.location.href = "/Dashboard/dashboard.html";
    } else {
        alert('Error. Invalid Credentials');
    }
});
