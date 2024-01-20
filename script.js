document.addEventListener('DOMContentLoaded', function() {

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Theme Toggle
    const themeToggleButton = document.querySelector('#theme-toggle');
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    // More JavaScript features can be added here
});
