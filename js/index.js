window.addEventListener('scroll', function () {
    const desktopNav = document.querySelector('.nav'); 

    if (window.innerWidth > 768 && desktopNav) {
        if (window.scrollY > 20) {
            desktopNav.style.backgroundColor = '#212529'; 
        } else {
            desktopNav.style.backgroundColor = 'transparent'; 
        }
    }
});

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); 

        const targetId = this.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offset = document.querySelector('nav').offsetHeight; 

            const targetPosition = targetSection.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

const menuButton = document.querySelector('.menu-button');
const dropdownMenu = document.querySelector('.dropdown-menu');
const links = dropdownMenu.querySelectorAll('a');

menuButton.addEventListener('click', function (event) {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

links.forEach(link => {
    link.addEventListener('click', function () {
        dropdownMenu.style.display = 'none'; 
    });
});

const modal = document.getElementById("modal");
const closeButtons = document.querySelectorAll("#close, #close-button"); 
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const body = document.body;

let scrollPosition = 0;

function openModal(title, description, imageSrc) {
    scrollPosition = window.scrollY;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = imageSrc;
    modal.style.display = "flex"; 
    body.classList.add("no-scroll");
}

function closeModal() {
    modal.style.display = "none"; 
    body.classList.remove("no-scroll"); 
    window.scrollTo(0, scrollPosition); 
}

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    const cardImage = card.querySelector("img");
    const plusIcon = card.querySelector('.plus');

    cardImage.addEventListener("click", function () { 
        const title = card.getAttribute("data-title");
        const description = card.getAttribute("data-description");
        const imageSrc = card.getAttribute("data-image");
        openModal(title, description, imageSrc); 
    });

    if (plusIcon) {
        plusIcon.addEventListener("click", function () {
            const title = card.getAttribute("data-title");
            const description = card.getAttribute("data-description");
            const imageSrc = card.getAttribute("data-image");
            openModal(title, description, imageSrc); 
        });
    }
});

closeButtons.forEach(button => {
    button.addEventListener("click", closeModal); 
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-btn');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const telInput = document.getElementById('tel');
    const messageInput = document.getElementById('message');

    function validateForm() {
        const isNameValid = nameInput.value.trim() !== '';
        const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value);
        const isTelValid = /^\+?[0-9]{10,15}$/.test(telInput.value);
        const isMessageValid = messageInput.value.trim() !== '';

        if (isNameValid && isEmailValid && isTelValid && isMessageValid) {
            submitButton.disabled = false;
            submitButton.style.opacity = 1;
        } else {
            submitButton.disabled = true;
            submitButton.style.opacity = 0.6;
        }
    }

    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    telInput.addEventListener('input', validateForm);
    messageInput.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
        if (submitButton.disabled) {
            event.preventDefault();
        }
    });
});

document.querySelectorAll('.img-container').forEach(container => {
    const plusIcon = container.querySelector('.plus');

    container.addEventListener('mouseenter', () => {
        plusIcon.style.opacity = '1'; 
    });

    container.addEventListener('mouseleave', () => {
        plusIcon.style.opacity = '0';
    });
});