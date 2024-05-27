/* This is the JavaScript for Editlancer Page */

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('button')) {
            event.preventDefault(); 
            console.log('Button clicked: ' + event.target.textContent);

            if (event.target.id === 'servicesButton') {
                window.location.href = 'Service.html';
            } else if (event.target.id === 'aboutButton') {
                window.location.href = 'About.html';
            } else if (event.target.id === 'contactButton') {
                window.location.href = 'About.html';
            }
        }
    });
});