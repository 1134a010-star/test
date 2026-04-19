document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to all section contents
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.add('hidden'); // hidden class should be defined in CSS for better control
        observer.observe(section);
    });
});

// Adding "hidden" logic via JS to ensure it works even if styles load late
const style = document.createElement('style');
style.textContent = `
    .hidden {
        opacity: 0;
        transform: translateY(30px);
        transition: all 1.2s ease-out;
    }
    .reveal {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
