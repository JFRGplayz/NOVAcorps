const logoutLink = document.getElementById("logout-link");

logoutLink.addEventListener("click", function(event) {
    event.preventDefault();

    sessionStorage.removeItem("novaAuthenticated");

    window.location.href = "portal.html";
});
