const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("password").value;

    if (username === "admin" && password === "secret") {
        window.location.href = "dashboard.php";
    } else {
        alert("INVALID CREDENTIALS");
    }
});