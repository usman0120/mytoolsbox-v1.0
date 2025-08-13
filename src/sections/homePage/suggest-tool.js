// Form Submission Handling
document.getElementById('suggestion-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real implementation, you would send this data to your backend
    // For now, we'll just show the success message
    const formData = new FormData(this);
    const suggestion = Object.fromEntries(formData.entries());
    console.log('Tool suggestion submitted:', suggestion);
    
    // Show success message
    document.getElementById('success-message').classList.remove('hidden');
    this.reset();
    
    // Scroll to success message
    document.getElementById('success-message').scrollIntoView({
        behavior: 'smooth'
    });
    
    // Hide success message after 8 seconds
    setTimeout(() => {
        document.getElementById('success-message').classList.add('hidden');
    }, 8000);
});

// FAQ Accordion Functionality
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('i');
        
        // Toggle content visibility
        content.classList.toggle('hidden');
        
        // Rotate icon
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
        
        // Close other FAQs
        document.querySelectorAll('.faq-toggle').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.nextElementSibling.classList.add('hidden');
                otherButton.querySelector('i').classList.add('fa-chevron-down');
                otherButton.querySelector('i').classList.remove('fa-chevron-up');
            }
        });
    });
});


    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }


function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}