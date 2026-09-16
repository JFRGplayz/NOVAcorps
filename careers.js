alert("NOVA JS LOADED");

const form = document.getElementById("application-form");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    alert("FORM SUBMITTED");
});







const form = document.getElementById("application-form");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const submitButton = form.querySelector("button");

    submitButton.disabled = true;
    submitButton.textContent = "SUBMITTING...";

    const formData = new FormData(form);

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        position: formData.get("position"),
        experience: formData.get("experience"),
        qualifications: formData.get("qualifications"),
        message: formData.get("message")
    };

    try {
        const response = await fetch(
            "https://nova-careers.hlewis.workers.dev",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        if (result.success) {
            alert(
                "APPLICATION RECEIVED\n\n" +
                "Clearance Level: " + result.clearance + "\n" +
                "Employee ID: NRP-1047"\n +
                "Personnel Code: " + result.code
            );

            form.reset();
        } else {
            alert("APPLICATION FAILED");
        }

    } catch (error) {
        console.error(error);
        alert("CONNECTION ERROR");
    }

    submitButton.disabled = false;
    submitButton.textContent = "SUBMIT APPLICATION";
});
