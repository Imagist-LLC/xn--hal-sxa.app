// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Only run animations on larger screens
    if (window.innerWidth > 768) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        // Observe all feature sections
        document.querySelectorAll('.feature').forEach(el => {
            observer.observe(el);
        });
    } else {
        // On mobile, show all content immediately
        document.querySelectorAll('.feature').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }
});

// iOS-specific enhancements
if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
    document.documentElement.classList.add('ios');
}