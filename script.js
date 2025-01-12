// Make navigation links scroll smoothly to their sections when clicked
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Stop the default click behavior
        const targetId = link.getAttribute('href').substring(1); // Get the section's ID from the link
        const targetElement = document.getElementById(targetId); // Find the section by its ID

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll to the section smoothly
        }
    });
});

// Add a button for smaller screens to open and close the navigation menu
const nav = document.querySelector('.nav');
const toggleButton = document.createElement('button'); // Create the button
toggleButton.textContent = '☰'; // Set the button's text to a hamburger menu symbol
toggleButton.classList.add('nav-toggle'); // Add a CSS class for styling the button

document.querySelector('header').appendChild(toggleButton); // Add the button to the header

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('nav-open'); // Show or hide the menu when the button is clicked
});

// Check that the contact form is filled out before letting it submit
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', event => {
        const name = document.getElementById('name'); // Get the "Name" field
        const email = document.getElementById('email'); // Get the "Email" field
        const message = document.getElementById('message'); // Get the "Message" field

        // If any field is empty, stop the form from sending and show an alert
        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            event.preventDefault(); // Stop the form submission
            alert('Please fill in all required fields.'); // Show an error message
        }
    });
}

const menuToggle = document.querySelector('.aboutmenu-toggle');
const navLinks = document.querySelector('.aboutnav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

