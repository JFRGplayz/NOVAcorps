const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const employeeID = document.getElementById("employee-id").value;
    const accessCode = document.getElementById("access-code").value;

    if (
        employeeID === "NRP-1047" &&
        accessCode === "NOVA-01"
    ) {

        window.location.href = "personnel.html";

    } else {

        loginMessage.textContent = "INVALID CREDENTIALS.";

    }

});
