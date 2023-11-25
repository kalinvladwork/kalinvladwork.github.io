function validateForm() {
    let form = document.querySelector('.form');
    let inputs = form.querySelectorAll('input[data-validation]');

    inputs.forEach(function (input) {
        let validationType = input.dataset.validation;
        let errorDiv = form.querySelector('[data-error="' + validationType + '"]');
        let inputValue = input.value.trim();

        if (inputValue === "") {
            errorDiv.textContent = "Поле не повинно бути порожнім";
            errorDiv.classList.add("is-invalid");
            input.classList.add("is-invalid");
        } else if (validationType === "email" && !isValidEmail(inputValue)) {
            errorDiv.textContent = "Вкажіть вашу ел. пошту";
            errorDiv.classList.add("is-invalid");
            input.classList.add("is-invalid");
        } else {
            errorDiv.textContent = "";
            errorDiv.classList.remove("is-invalid");
            input.classList.remove("is-invalid");
        }
    });

    return !form.querySelector('.is-invalid');
}

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
