/* ===================================
   GREENSCAPE GARDENING - MAIN JAVASCRIPT
   =================================== */

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initHeader();
    initFooter();
    initStickyCTA();
    initExitPopup();
    initCookieConsent();
    initBackToTop();
    initScrollAnimations();
    initMobileMenu();
});

// ===================================
// HEADER COMPONENT
// ===================================
function initHeader() {
    const headerHTML = `
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="container">
                <div class="top-bar-content">
                    <div class="top-bar-left">
                        <a href="tel:206-971-8293" class="top-bar-link">
                            <i class="fas fa-phone"></i>
                            <span>206-971-8293</span>
                        </a>
                        <a href="mailto:help@greenscapegradening.com" class="top-bar-link">
                            <i class="fas fa-envelope"></i>
                            <span>help@greenscapegradening.com</span>
                        </a>
                    </div>
                    <div>
                        🌱 Licensed & Insured | Serving All of USA
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Header -->
        <header id="main-header">
            <nav class="container">
                <div class="header-content">
                    <a href="index.html" class="logo">
                        <div class="logo-icon">
                            <i class="fas fa-seedling"></i>
                        </div>
                        <div class="logo-text">
                            <span class="logo-title">GreenScape</span>
                            <span class="logo-subtitle">Gardening Services</span>
                        </div>
                    </a>

                    <!-- Desktop Navigation -->
                    <ul class="nav-menu">
                        <li><a href="index.html" class="nav-link">Home</a></li>
                        <li><a href="about.html" class="nav-link">About</a></li>
                        <li><a href="services.html" class="nav-link">Services</a></li>
                        <li><a href="contact.html" class="nav-link">Contact</a></li>
                        <li><a href="faq.html" class="nav-link">FAQ</a></li>
                    </ul>

                    <div class="header-actions">
                        <a href="tel:206-971-8293" class="header-phone">206-971-8293</a>
                        <a href="contact.html" class="btn btn-primary">Get Free Quote</a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>

                <!-- Mobile Navigation -->
                <div class="mobile-menu" id="mobile-menu">
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="about.html" class="nav-link">About</a>
                    <a href="services.html" class="nav-link">Services</a>
                    <a href="contact.html" class="nav-link">Contact</a>
                    <a href="faq.html" class="nav-link">FAQ</a>
                    
                    <div class="mobile-menu-actions">
                        <a href="tel:206-971-8293" class="mobile-phone-link">
                            <i class="fas fa-phone"></i>
                            <span>206-971-8293</span>
                        </a>
                        <a href="contact.html" class="btn btn-primary">Get Free Quote</a>
                    </div>
                </div>
            </nav>
        </header>
    `;
    
    const headerElement = document.getElementById('header');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
        
        // Set active link
        setActiveLink();
        
        // Scroll event for header
        window.addEventListener('scroll', function() {
            const header = document.getElementById('main-header');
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// ===================================
// SET ACTIVE NAV LINK
// ===================================
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ===================================
// MOBILE MENU
// ===================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }
}

// ===================================
// FOOTER COMPONENT
// ===================================
function initFooter() {
    const currentYear = new Date().getFullYear();
    
    const footerHTML = `
        <footer>
            <div class="footer-content">
                <div class="container">
                    <div class="footer-grid">
                        <!-- Brand Section -->
                        <div class="footer-brand-section">
                            <div class="footer-brand">
                                <a href="index.html" class="logo">
                                    <div class="logo-icon">
                                        <i class="fas fa-seedling"></i>
                                    </div>
                                    <div class="logo-text">
                                        <span class="logo-title" style="color: white;">GreenScape</span>
                                        <span class="logo-subtitle">Gardening Services</span>
                                    </div>
                                </a>
                            </div>
                            <p class="footer-description">
                                Professional, affordable, and eco-friendly gardening solutions across the USA. 
                                Transforming outdoor spaces since 2011.
                            </p>
                            
                            <div style="margin-bottom: 1.5rem;">
                                <h4 style="color: white; font-weight: 600; margin-bottom: 0.75rem; font-size: 0.875rem;">Follow Us</h4>
                                <div class="social-links">
                                    <a href="#" class="social-link" aria-label="Facebook">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" class="social-link" aria-label="Twitter">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" class="social-link" aria-label="Instagram">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" class="social-link" aria-label="LinkedIn">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="trust-badges-footer">
                                <div class="trust-badge-footer">🏆 Award Winning</div>
                                <div class="trust-badge-footer">✓ Licensed & Insured</div>
                                <div class="trust-badge-footer">🌱 Eco-Friendly</div>
                            </div>
                        </div>

                        <!-- Quick Links -->
                        <div class="footer-quick-links">
                            <h3>Quick Links</h3>
                            <ul class="footer-links">
                                <li><a href="index.html" class="footer-link">
                                    <i class="fas fa-arrow-right"></i> Home
                                </a></li>
                                <li><a href="about.html" class="footer-link">
                                    <i class="fas fa-arrow-right"></i> About Us
                                </a></li>
                                <li><a href="services.html" class="footer-link">
                                    <i class="fas fa-arrow-right"></i> Services
                                </a></li>
                                <li><a href="contact.html" class="footer-link">
                                    <i class="fas fa-arrow-right"></i> Contact
                                </a></li>
                                <li><a href="faq.html" class="footer-link">
                                    <i class="fas fa-arrow-right"></i> FAQ
                                </a></li>
                            </ul>
                        </div>

                        <!-- Legal -->
                        <div class="footer-legal">
                            <h3>Legal</h3>
                            <ul class="footer-links">
                                <li><a href="privacy-policy.html" class="footer-link">
                                    <i class="fas fa-arrow-right"></i> Privacy Policy
                                </a></li>
                                <li><a href="terms.html" class="footer-link">
                                    <i class="fas fa-arrow-right"></i> Terms & Conditions
                                </a></li>
                                <li><a href="disclaimer.html" class="footer-link">
                                    <i class="fas fa-arrow-right"></i> Disclaimer
                                </a></li>
                            </ul>
                        </div>

                        <!-- Contact Info -->
                        <div class="footer-contact">
                            <h3>Contact Us</h3>
                            <div>
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <div class="contact-label">Email</div>
                                        <div class="contact-value">
                                            <a href="mailto:help@greenscapegradening.com">help@greenscapegradening.com</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="fas fa-phone"></i>
                                    </div>
                                    <div>
                                        <div class="contact-label">Phone</div>
                                        <div class="contact-value">
                                            <a href="tel:206-971-8293" style="font-weight: 600;">206-971-8293</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <div class="contact-label">Address</div>
                                        <div class="contact-value">
                                            5800 SW 110th Ave,<br>
                                            Davie, FL 33328,<br>
                                            United States
                                        </div>
                                    </div>
                                </div>

                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="fas fa-clock"></i>
                                    </div>
                                    <div>
                                        <div class="contact-label">Hours</div>
                                        <div class="contact-value">
                                            Mon-Sat: 7AM-7PM<br>
                                            Sun: 9AM-5PM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Bar -->
                    <div class="footer-bottom">
                        <div class="footer-bottom-content">
                            <p class="footer-copyright">
                                &copy; ${currentYear} GreenScape Gardening. All rights reserved.
                            </p>
                            <div class="footer-features">
                                <span><span style="color: #4ade80;">🌱</span> Eco-Friendly Practices</span>
                                <span style="display: none;">•</span>
                                <span><span style="color: #4ade80;">✓</span> 100% Satisfaction Guaranteed</span>
                                <span style="display: none;">•</span>
                                <span><span style="color: #4ade80;">🏆</span> Award Winning Service</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
}

// ===================================
// STICKY CTA
// ===================================
function initStickyCTA() {
    const ctaHTML = `
        <div id="sticky-cta-container" style="position: fixed; bottom: 20px; right: 20px; z-index: 999; display: none;">
            <div id="cta-menu" style="position: absolute; bottom: 70px; right: 0; background: white; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); padding: 1rem; min-width: 200px; display: none;">
                <a href="contact.html" style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem; border-radius: 8px; transition: background 0.3s; color: #374151; margin-bottom: 0.5rem;">
                    <i class="fas fa-envelope" style="color: #16a34a;"></i>
                    <span>Contact Us</span>
                </a>
                <a href="tel:206-971-8293" style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem; border-radius: 8px; transition: background 0.3s; color: #374151;">
                    <i class="fas fa-phone" style="color: #16a34a;"></i>
                    <span>206-971-8293</span>
                </a>
            </div>
            <button id="sticky-cta-btn" style="background: linear-gradient(135deg, #16a34a, #22c55e); color: white; border: none; width: 60px; height: 60px; border-radius: 50%; cursor: pointer; box-shadow: 0 4px 20px rgba(22, 163, 74, 0.4); transition: all 0.3s; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
                <i class="fas fa-phone"></i>
            </button>
        </div>
    `;
    
    const ctaElement = document.getElementById('sticky-cta');
    if (ctaElement) {
        ctaElement.innerHTML = ctaHTML;
        
        const ctaContainer = document.getElementById('sticky-cta-container');
        const ctaBtn = document.getElementById('sticky-cta-btn');
        const ctaMenu = document.getElementById('cta-menu');
        
        // Show CTA on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                ctaContainer.style.display = 'block';
            } else {
                ctaContainer.style.display = 'none';
            }
        });
        
        // Toggle menu
        let menuOpen = false;
        ctaBtn.addEventListener('click', function() {
            menuOpen = !menuOpen;
            ctaMenu.style.display = menuOpen ? 'block' : 'none';
            ctaBtn.style.transform = menuOpen ? 'rotate(135deg)' : 'rotate(0deg)';
        });
        
        // Close menu on click outside
        document.addEventListener('click', function(e) {
            if (!ctaContainer.contains(e.target) && menuOpen) {
                menuOpen = false;
                ctaMenu.style.display = 'none';
                ctaBtn.style.transform = 'rotate(0deg)';
            }
        });
        
        // Hover effect
        ctaBtn.addEventListener('mouseenter', function() {
            ctaBtn.style.transform = menuOpen ? 'rotate(135deg) scale(1.1)' : 'scale(1.1)';
            ctaBtn.style.boxShadow = '0 6px 30px rgba(22, 163, 74, 0.6)';
        });
        
        ctaBtn.addEventListener('mouseleave', function() {
            ctaBtn.style.transform = menuOpen ? 'rotate(135deg)' : 'scale(1)';
            ctaBtn.style.boxShadow = '0 4px 20px rgba(22, 163, 74, 0.4)';
        });
    }
}

// ===================================
// EXIT INTENT POPUP
// ===================================
function initExitPopup() {
    const popupHTML = `
        <div id="exit-popup-overlay" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 9999; align-items: center; justify-content: center; padding: 1rem;">
            <div style="background: white; border-radius: 1rem; max-width: 500px; width: 100%; padding: 2rem; position: relative; animation: popupSlideIn 0.3s ease;">
                <button id="popup-close" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #6b7280; transition: color 0.3s;">
                    <i class="fas fa-times"></i>
                </button>
                
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🌱</div>
                    <h2 style="font-size: 1.75rem; font-weight: 700; color: #166534; margin-bottom: 0.5rem;">Wait! Don't Miss Out!</h2>
                    <p style="color: #6b7280;">Get a FREE quote and 10% off your first service!</p>
                </div>
                
                <form id="exit-popup-form" style="margin-bottom: 1rem;">
                    <input type="text" id="popup-name" placeholder="Your Name" required style="width: 100%; padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 0.5rem; margin-bottom: 0.75rem; font-size: 1rem;">
                    <input type="email" id="popup-email" placeholder="Your Email" required style="width: 100%; padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 0.5rem; margin-bottom: 0.75rem; font-size: 1rem;">
                    <input type="tel" id="popup-phone" placeholder="Phone Number" required style="width: 100%; padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 0.5rem; margin-bottom: 1rem; font-size: 1rem;">
                    
                    <label style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 1rem; font-size: 0.875rem; color: #6b7280;">
                        <input type="checkbox" required style="margin-top: 0.25rem;">
                        <span>I agree to the <a href="privacy-policy.html" style="color: #16a34a; text-decoration: underline;">Privacy Policy</a> and consent to be contacted.</span>
                    </label>
                    
                    <button type="submit" style="width: 100%; background: linear-gradient(135deg, #16a34a, #22c55e); color: white; padding: 1rem; border: none; border-radius: 9999px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: transform 0.3s;">
                        Get My Free Quote Now
                    </button>
                </form>
                
                <p style="text-align: center; font-size: 0.75rem; color: #9ca3af;">No spam, unsubscribe anytime.</p>
            </div>
        </div>
        
        <style>
        @keyframes popupSlideIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        </style>
    `;
    
    const popupElement = document.getElementById('exit-popup');
    if (popupElement) {
        popupElement.innerHTML = popupHTML;
        
        const overlay = document.getElementById('exit-popup-overlay');
        const closeBtn = document.getElementById('popup-close');
        const form = document.getElementById('exit-popup-form');
        
        let popupShown = sessionStorage.getItem('exitPopupShown');
        
        // Show on exit intent
        document.addEventListener('mouseleave', function(e) {
            if (e.clientY < 0 && !popupShown) {
                overlay.style.display = 'flex';
                sessionStorage.setItem('exitPopupShown', 'true');
                popupShown = true;
            }
        });
        
        // Close popup
        closeBtn.addEventListener('click', function() {
            overlay.style.display = 'none';
        });
        
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.style.display = 'none';
            }
        });
        
        // Form submit
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! We will contact you soon with your free quote.');
            overlay.style.display = 'none';
            form.reset();
        });
    }
}

// ===================================
// COOKIE CONSENT
// ===================================
function initCookieConsent() {
    const consentHTML = `
        <div id="cookie-banner" style="display: none; position: fixed; bottom: 0; left: 0; right: 0; background: white; padding: 1.5rem; box-shadow: 0 -4px 20px rgba(0,0,0,0.1); z-index: 9998; animation: slideUp 0.3s ease;">
            <div class="container">
                <div style="display: flex; flex-direction: column; gap: 1rem; align-items: start;">
                    <div style="flex: 1;">
                        <h3 style="font-weight: 600; margin-bottom: 0.5rem; color: #1f2937;">🍪 We Value Your Privacy</h3>
                        <p style="font-size: 0.875rem; color: #6b7280;">
                            We use cookies to enhance your experience, analyze traffic, and personalize content. 
                            <a href="privacy-policy.html" style="color: #16a34a; text-decoration: underline;">Learn more</a>
                        </p>
                    </div>
                    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                        <button id="accept-cookies" style="background: #16a34a; color: white; padding: 0.625rem 1.5rem; border: none; border-radius: 9999px; font-weight: 600; cursor: pointer; transition: background 0.3s;">
                            Accept All
                        </button>
                        <button id="decline-cookies" style="background: white; color: #374151; padding: 0.625rem 1.5rem; border: 2px solid #e5e7eb; border-radius: 9999px; font-weight: 600; cursor: pointer; transition: all 0.3s;">
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
        @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
        }
        </style>
    `;
    
    const consentElement = document.getElementById('cookie-consent');
    if (consentElement) {
        consentElement.innerHTML = consentHTML;
        
        const banner = document.getElementById('cookie-banner');
        const acceptBtn = document.getElementById('accept-cookies');
        const declineBtn = document.getElementById('decline-cookies');
        
        // Show banner if not already accepted/declined
        if (!localStorage.getItem('cookieConsent')) {
            setTimeout(() => {
                banner.style.display = 'block';
            }, 2000);
        }
        
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            banner.style.display = 'none';
        });
        
        declineBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'declined');
            banner.style.display = 'none';
        });
    }
}

// ===================================
// BACK TO TOP BUTTON
// ===================================
function initBackToTop() {
    const backToTopHTML = `
        <button id="back-to-top-btn" style="display: none; position: fixed; bottom: 20px; left: 20px; background: var(--color-green-600); color: white; width: 50px; height: 50px; border-radius: 50%; border: none; cursor: pointer; z-index: 998; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: all 0.3s;">
            <i class="fas fa-arrow-up"></i>
        </button>
    `;
    
    const backToTopElement = document.getElementById('back-to-top');
    if (backToTopElement) {
        backToTopElement.innerHTML = backToTopHTML;
        
        const btn = document.getElementById('back-to-top-btn');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                btn.style.display = 'block';
            } else {
                btn.style.display = 'none';
            }
        });
        
        btn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        btn.addEventListener('mouseenter', function() {
            btn.style.transform = 'scale(1.1)';
        });
        
        btn.addEventListener('mouseleave', function() {
            btn.style.transform = 'scale(1)';
        });
    }
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('in-view');
                }, parseInt(entry.target.dataset.delay) || 0);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

// ===================================
// FORM VALIDATION
// ===================================
function validateForm(form) {
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const consentCheckbox = form.querySelector('input[type="checkbox"]');
    
    if (!nameInput.value.trim()) {
        alert('Please enter your name');
        return false;
    }
    
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    if (!phoneInput.value.trim()) {
        alert('Please enter your phone number');
        return false;
    }
    
    if (consentCheckbox && !consentCheckbox.checked) {
        alert('Please agree to the privacy policy');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
