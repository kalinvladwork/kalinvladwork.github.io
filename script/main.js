let modal = document.querySelector('#modalContainer'),
    body = document.querySelector('body'),
    choice = document.querySelector('#choice'),
    homeownerTrue = document.querySelector('#homeowner_true'),
    homeownerFalse = document.querySelector('#homeowner_false'),
    activeForm = document.querySelector('.formSection.formSection_active'),
    stepsProgress = document.querySelector('.stepsProgress__step');

function scrolling() {
    event.preventDefault()
    document.getElementById('sectionForm').scrollIntoView({
        behavior: 'smooth'
    });
}

function openModal() {
    event.preventDefault()
    modal.removeAttribute('class');
    modal.classList.add('is-open');
    body.classList.add('modal-active');
}

function closeModal() {
    event.preventDefault()
    modal.classList.add('out');
    body.classList.remove('modal-active');
}

function nextStep() {
    if (!homeownerTrue.checked && !homeownerFalse.checked) {
        return false
    }

    if (homeownerTrue.checked) {
        choice.innerText = 'Yes';
    } else if (homeownerFalse.checked) {
        choice.innerText = 'No';
    }

    activeForm.classList.remove('formSection_active');
    activeForm.nextElementSibling.classList.add('formSection_active');
    stepsProgress.classList.add('stepsProgress__step_full')
}

function submitForm() {
    event.preventDefault();
    closeModal();
}

