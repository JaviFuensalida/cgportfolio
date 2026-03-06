// Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                if (navMenu.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    body.style.overflow = '';
                }
            }
        });

        // Close menu when clicking on a link (except submenu parent)
        const navLinks = document.querySelectorAll('.nav-list a:not(.has-submenu > a)');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = '';
            });
        });
    }

    // Submenu toggle functionality
    const submenuParents = document.querySelectorAll('.has-submenu > a');
    submenuParents.forEach(parent => {
        parent.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                const submenu = this.nextElementSibling;
                const parentLi = this.parentElement;
                
                // Toggle submenu
                parentLi.classList.toggle('submenu-open');
                
                if (submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                } else {
                    submenu.style.display = 'block';
                }
            }
        });
    });

    // Share Functionality
    const shareBtn = document.querySelector('.share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async function() {
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'Carlotta Gambato',
                        text: 'Check my Instagram',
                        url: window.location.href
                    });
                } catch (err) {
                    console.log('Error sharing:', err);
                }
            } else {
                // Fallback: copy to clipboard
                try {
                    await navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                } catch (err) {
                    console.log('Error copying to clipboard:', err);
                }
            }
        });
    }

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Lazy loading for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.gallery-item, .project-image, .about-content');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(el);
    });

    // Carousel Functionality
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        const items = carousel.querySelectorAll('.carousel-item');
        const navPrevCarouselBtn = document.querySelector('.navigation-controls-left .prev-btn');
        const navNextCarouselBtn = document.querySelector('.navigation-controls-left .next-btn');
        const currentSlideSpan = document.querySelector('.current-slide');
        const totalSlidesSpan = document.querySelector('.total-slides');
        
        let currentSlide = 0;
        const totalSlides = items.length;
        
        if (totalSlidesSpan) {
            totalSlidesSpan.textContent = totalSlides;
        }
        
        function showSlide(index) {
            items.forEach((item, i) => {
                item.classList.remove('active');
                if (i === index) {
                    item.classList.add('active');
                }
            });
            
            if (currentSlideSpan) {
                currentSlideSpan.textContent = index + 1;
            }
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }
        
        // Click en la imagen para pasar a la siguiente o abrir desde grid
        carousel.addEventListener('click', function(e) {
            const carouselContainer = document.querySelector('.carousel-container');
            
            // Si estamos en vista de grid
            if (carouselContainer.classList.contains('grid-view')) {
                // Buscar qué imagen se clickeó
                const clickedItem = e.target.closest('.carousel-item');
                if (clickedItem) {
                    // Encontrar el índice de la imagen clickeada
                    const clickedIndex = Array.from(items).indexOf(clickedItem);
                    if (clickedIndex !== -1) {
                        // Salir de la vista de grid
                        carouselContainer.classList.remove('grid-view');
                        const gridToggleBtn = document.querySelector('.grid-toggle-btn');
                        if (gridToggleBtn) {
                            gridToggleBtn.textContent = '☷';
                            gridToggleBtn.setAttribute('aria-label', 'Toggle Grid View');
                        }
                        // Mostrar la imagen clickeada
                        currentSlide = clickedIndex;
                        showSlide(currentSlide);
                    }
                }
            } else {
                // En vista de carrusel, pasar a la siguiente imagen
                nextSlide();
            }
        });
        
        // Botones de navegación superiores
        if (navPrevCarouselBtn) {
            navPrevCarouselBtn.addEventListener('click', function(e) {
                e.preventDefault();
                prevSlide();
            });
        }
        
        if (navNextCarouselBtn) {
            navNextCarouselBtn.addEventListener('click', function(e) {
                e.preventDefault();
                nextSlide();
            });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });
        
        // Touch swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        carousel.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        carousel.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                nextSlide();
            }
            if (touchEndX > touchStartX + 50) {
                prevSlide();
            }
        }
    }

    // Grid Toggle Functionality
    const gridToggleBtn = document.querySelector('.grid-toggle-btn');
    if (gridToggleBtn) {
        const carouselContainer = document.querySelector('.carousel-container');
        
        gridToggleBtn.addEventListener('click', function() {
            carouselContainer.classList.toggle('grid-view');
            
            // Update button content and aria-label based on current view
            if (carouselContainer.classList.contains('grid-view')) {
                gridToggleBtn.textContent = '✕';
                gridToggleBtn.setAttribute('aria-label', 'Close Grid View');
            } else {
                gridToggleBtn.textContent = '☷';
                gridToggleBtn.setAttribute('aria-label', 'Toggle Grid View');
            }
        });
        
        // Set initial content
        gridToggleBtn.textContent = '☷';
    }
});

// Handle image errors - show placeholder
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500"%3E%3Crect fill="%23f0f0f0" width="400" height="500"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage Placeholder%3C/text%3E%3C/svg%3E';
        e.target.alt = 'Image placeholder';
    }
}, true);
