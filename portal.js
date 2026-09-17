const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const employeeID = document.getElementById("employee-id").value.trim();
    const accessCode = document.getElementById("access-code").value.trim();

    // Get the applicant's generated NOVA credentials
    const storedEmployeeID = localStorage.getItem("novaPersonnelID");
    const storedAccessCode = localStorage.getItem("novaClearanceCode");

    if (
        employeeID === storedEmployeeID &&
        accessCode === storedAccessCode
    ) {

        sessionStorage.setItem("novaAuthenticated", "true");

        window.location.href = "personnel.html";

    } else {

        loginMessage.textContent = "INVALID CREDENTIALS.";

    }

});
