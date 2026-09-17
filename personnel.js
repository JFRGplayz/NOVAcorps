const logoutLink = document.getElementById("logout-link");

logoutLink.addEventListener("click", function(event) {
    event.preventDefault();

    sessionStorage.removeItem("novaAuthenticated");

    window.location.href = "portal.html";
});

const employeeID = localStorage.getItem("novaPersonnelID");

if (employeeID) {
    document.getElementById("employee-id").textContent = employeeID;
    document.getElementById("welcome-id").textContent = employeeID;
}
