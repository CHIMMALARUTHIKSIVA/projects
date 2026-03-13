let form = document.getElementById("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let nameError = document.getElementById("nameError");
    let ageError = document.getElementById("ageError");

    nameError.textContent = "";
    ageError.textContent = "";

    let valid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    // Age validation
    if (age === "") {
        ageError.textContent = "Age is required";
        valid = false;
    }
    else if (age < 18 || age > 60) {
        ageError.textContent = "Age must be between 18 and 60";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
    }

});