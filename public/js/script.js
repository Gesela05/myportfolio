// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.elements[0].value;
        const email = this.elements[1].value;
        const message = this.elements[2].value;
        
        // In a real app, you would send this to your server
        console.log({ name, email, message });
        
        // Show success message
        formResponse.textContent = "Thanks for your message! I'll get back to you soon.";
        formResponse.style.color = "green";
        
        // Reset form
        this.reset();
    });
    
    // Add some sample projects (you'll replace these with your own)
    const projects = [
        { title: "School Project", description: "A cool project I made for class" },
        { title: "Personal Website", description: "My first attempt at web development" },
        { title: "JavaScript Game", description: "A simple game built with JavaScript" }
    ];
    
    const projectsContainer = document.querySelector('.projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectCard);
    });
});