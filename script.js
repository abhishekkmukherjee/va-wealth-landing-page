      tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        'inter': ['Inter', 'sans-serif'],
                    },
                    colors: {
                        'indigo': {
                            50: '#eef2ff',
                            100: '#e0e7ff',
                            200: '#c7d2fe',
                            300: '#a5b4fc',
                            400: '#818cf8',
                            500: '#6366f1',
                            600: '#4f46e5',
                            700: '#4338ca',
                            800: '#3730a3',
                            900: '#312e81',
                        }
                    }
                }
            }
        }


        // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const themeToggleMobile = document.getElementById('theme-toggle-mobile');
        const html = document.documentElement;
        
        // Check for saved theme preference or default to light mode
        if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        }
        
        function toggleTheme() {
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Update toggle button icons
            updateThemeIcons();
        }
        
        function updateThemeIcons() {
            const isDark = html.classList.contains('dark');
            
            // Update desktop theme toggle
            const desktopSunIcon = themeToggle.querySelector('.fa-sun');
            const desktopMoonIcon = themeToggle.querySelector('.fa-moon');
            if (isDark) {
                desktopSunIcon.classList.add('hidden');
                desktopMoonIcon.classList.remove('hidden');
            } else {
                desktopSunIcon.classList.remove('hidden');
                desktopMoonIcon.classList.add('hidden');
            }
            
            // Update mobile theme toggle
            const mobileSunIcon = themeToggleMobile.querySelector('.fa-sun');
            const mobileMoonIcon = themeToggleMobile.querySelector('.fa-moon');
            if (isDark) {
                mobileSunIcon.classList.add('hidden');
                mobileMoonIcon.classList.remove('hidden');
            } else {
                mobileSunIcon.classList.remove('hidden');
                mobileMoonIcon.classList.add('hidden');
            }
        }
        
        // Initialize theme icons
        updateThemeIcons();
        
        // Add event listeners
        themeToggle.addEventListener('click', toggleTheme);
        themeToggleMobile.addEventListener('click', toggleTheme);

        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Scroll to Top Button
        const scrollToTopButton = document.getElementById('scroll-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopButton.classList.remove('opacity-0', 'invisible');
                scrollToTopButton.classList.add('opacity-100', 'visible');
            } else {
                scrollToTopButton.classList.add('opacity-0', 'invisible');
                scrollToTopButton.classList.remove('opacity-100', 'visible');
            }
        });
        
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('counter-animation')) {
                        entry.target.style.animationPlayState = 'running';
                    }
                    if (entry.target.classList.contains('feature-animation')) {
                        entry.target.style.animationPlayState = 'running';
                    }
                    if (entry.target.classList.contains('image-animation')) {
                        entry.target.style.animationPlayState = 'running';
                    }
                    if (entry.target.classList.contains('slide-in-left') || entry.target.classList.contains('slide-in-right')) {
                        entry.target.style.animationPlayState = 'running';
                    }
                    if (entry.target.classList.contains('service-card')) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                    }
                }
            });
        }, observerOptions);

        // Initialize service cards with hidden state
        document.querySelectorAll('.service-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            observer.observe(card);
        });

        // Observe all animated elements
        document.querySelectorAll('.counter-animation, .feature-animation, .image-animation, .slide-in-left, .slide-in-right, .stats-card').forEach(el => {
            if (el.classList.contains('counter-animation') || el.classList.contains('slide-in-left') || el.classList.contains('slide-in-right')) {
                el.style.animationPlayState = 'paused';
            }
            observer.observe(el);
        });

        // Button click handlers
        document.querySelectorAll('.cta-button, .know-more-btn').forEach(button => {
            button.addEventListener('click', function() {
                const action = this.textContent.trim();
                console.log(`Clicked: ${action}`);
                // Add your navigation logic here
            });
        });
        // Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Theme toggle functionality
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);



        // Tab Functionality
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                
                // Remove active class from all buttons
                tabButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.classList.add('text-gray-600', 'dark:text-gray-400', 'hover:text-gray-800', 'dark:hover:text-gray-200');
                });
                
                // Add active class to clicked button
                button.classList.add('active');
                button.classList.remove('text-gray-600', 'dark:text-gray-400', 'hover:text-gray-800', 'dark:hover:text-gray-200');
                
                // Hide all tab contents
                tabContents.forEach(content => {
                    content.classList.add('hidden');
                });
                
                // Show selected tab content
                document.getElementById(`${tabId}-content`).classList.remove('hidden');
            });
        });

        // Add hover effects for fund cards
        document.addEventListener('DOMContentLoaded', function() {
            const fundCards = document.querySelectorAll('.fund-card');
            
            fundCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });

        // Smooth scroll animation for fund links
        document.querySelectorAll('a[href="indifund.html"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // Add a subtle animation before navigation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                    // In a real app, you would navigate here
                    console.log('Navigating to individual fund page...');
                }, 150);
            });
        });