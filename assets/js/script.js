// Check for iOS immediately
if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
    document.documentElement.classList.add('ios');
}

// Intersection Observer for scroll animations
if ('IntersectionObserver' in window && window.innerWidth > 768) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.feature').forEach(el => {
                observer.observe(el);
            });
        });
    } else {
        // DOM already loaded
        document.querySelectorAll('.feature').forEach(el => {
            observer.observe(el);
        });
    }
} else {
    // No IntersectionObserver support or mobile - show content immediately
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.feature').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    });
}