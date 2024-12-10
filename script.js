let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelectorAll('header nav a[href*=' +id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// Typed JS
var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Python Developer', 'Java Learner'],
    typeSpeed: 70,
    // Add a delay of 750 milliseconds between each character
    backDelay: 750,
});

// Change Theme
document.addEventListener('DOMContentLoaded', (event) => {
    const modeToggle = document.getElementById('mode-toggle');
    modeToggle.addEventListener('click', function(event) {
        event.preventDefault();
        document.body.classList.toggle('light-mode');
    });
});

// Download Resume 
document.getElementById('downloadBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Specify the URL of the PDF file
    const pdfUrl = "Ankit's Resume.pdf";

    // Create an invisible anchor element
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'Ankit Portfolio and Resume.pdf'; // Optional: specify the file name for download
    document.body.appendChild(a);
    a.click(); // Trigger the download
    document.body.removeChild(a); // Remove the anchor from the DOM
});
