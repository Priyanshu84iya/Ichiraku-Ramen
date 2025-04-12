/**
 * COPYRIGHT NOTICE
 * © 2025 Priyanshu Chaurasiya. All Rights Reserved.
 * This code for Ichiraku Ramen is proprietary and protected by copyright law.
 * Unauthorized use, reproduction, modification, distribution, or display of this code
 * or any portion thereof is strictly prohibited and may result in severe civil and
 * criminal penalties, and will be prosecuted to the maximum extent possible under law.
 * 
 * For licensing inquiries or to purchase this website, please contact:
 * Priyanshu Chaurasiya via GitHub: https://github.com/Priyanshu84iya
 */

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('show');
        
        // Change hamburger icon to close icon and vice versa
        const menuIcon = document.getElementById('menu-icon');
        if (mobileNav.classList.contains('show')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });
    
    // Close mobile menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('show');
            document.getElementById('menu-icon').classList.remove('fa-xmark');
            document.getElementById('menu-icon').classList.add('fa-bars');
        });
    });
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Form validation for checkout
document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('order-box');
    
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            const specialRamen = parseInt(document.getElementById('special-ramen').value) || 0;
            const ichirakuRamen = parseInt(document.getElementById('ichiraku-ramen').value) || 0;
            const wagamamaRamen = parseInt(document.getElementById('wagamama-ramen').value) || 0;
            const veggieRamen = parseInt(document.getElementById('veggie-ramen').value) || 0;
            const cola = parseInt(document.getElementById('cola').value) || 0;
            
            const totalItems = specialRamen + ichirakuRamen + wagamamaRamen + veggieRamen + cola;
            
            if (totalItems === 0) {
                e.preventDefault();
                alert('Please select at least one item to order!');
            }
        });
    }
});

// Add some animations for better user experience
document.addEventListener('DOMContentLoaded', function() {
    // Fade in effect for menu items
    const menuItems = document.querySelectorAll('.menu-item');
    
    if (menuItems.length > 0) {
        menuItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 200 * (index + 1));
        });
    }
});