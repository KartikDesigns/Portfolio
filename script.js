// Preloader functionality
document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.getElementById('preloader');
  
  // Hide preloader when page is fully loaded
  window.addEventListener('load', function() {
    // Add fade-out effect by adding the hidden class
    preloader.classList.add('hidden');
    
    // Remove preloader after fade-out transition completes
    setTimeout(function() {
      preloader.style.display = 'none';
    }, 500); // Match the CSS transition duration
  });
  
  // Fallback: Hide preloader after 3 seconds in case of loading issues
  setTimeout(function() {
    if (preloader && preloader.style.display !== 'none') {
      preloader.classList.add('hidden');
      setTimeout(function() {
        if (preloader) preloader.style.display = 'none';
      }, 500);
    }
  }, 3000);
});

// Project gallery lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
  const projectImages = document.querySelectorAll('#projects .gallery-card img');
  const lightboxImage = document.getElementById('lightboxImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;
  
  // Accessibility enhancement for lightbox modal
  const lightboxModal = document.getElementById('lightboxModal');
  if (lightboxModal) {
    lightboxModal.addEventListener('shown.bs.modal', function () {
      // When modal is shown, ensure proper focus management
      this.setAttribute('aria-hidden', 'false');
    });
    
    lightboxModal.addEventListener('hidden.bs.modal', function () {
      // When modal is hidden, reset aria-hidden
      this.setAttribute('aria-hidden', 'true');
    });
  }
  
  // Open lightbox when project image is clicked
  projectImages.forEach(function(img, index) {
    img.addEventListener('click', function() {
      currentIndex = index;
      updateLightboxImage();
    });
  });
  
  // Update lightbox image based on current index with enhanced transition
  function updateLightboxImage() {
    if (projectImages[currentIndex]) {
      // Add enhanced slide and fade effect with direction awareness
      lightboxImage.classList.add('fade-out');
      
      setTimeout(function() {
        lightboxImage.src = projectImages[currentIndex].src;
        lightboxImage.alt = projectImages[currentIndex].alt;
        lightboxImage.classList.remove('fade-out');
        
        // Add directional slide effect
        lightboxImage.style.transform = 'scale(1.02) translateZ(0)';
        setTimeout(() => {
          lightboxImage.style.transform = 'scale(1) translateZ(0)';
        }, 300);
      }, 350);
    }
  }
  
  // Previous button functionality with enhanced animation
  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : projectImages.length - 1;
    updateLightboxImage();
    addNavigationEffect(prevBtn, 'left');
  });
  
  // Next button functionality with enhanced animation
  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex < projectImages.length - 1) ? currentIndex + 1 : 0;
    updateLightboxImage();
    addNavigationEffect(nextBtn, 'right');
  });
  
  // Add visual feedback for navigation buttons with directional effect
  function addNavigationEffect(button, direction) {
    // Add directional transform effect
    if (direction === 'left') {
      button.style.transform = 'translateX(-10px) scale(0.85) translateZ(0)';
    } else {
      button.style.transform = 'translateX(10px) scale(0.85) translateZ(0)';
    }
    
    button.style.boxShadow = '0 0 15px var(--primary-theme)';
    setTimeout(() => {
      button.style.transform = 'translateX(0) scale(1) translateZ(0)';
      button.style.boxShadow = 'none';
    }, 300);
  }
  
  // Keyboard navigation for lightbox
  document.addEventListener('keydown', function(e) {
    const lightboxModal = document.getElementById('lightboxModal');
    if (lightboxModal.classList.contains('show')) {
      if (e.key === 'ArrowLeft') {
        prevBtn.click();
      } else if (e.key === 'ArrowRight') {
        nextBtn.click();
      } else if (e.key === 'Escape') {
        bootstrap.Modal.getInstance(lightboxModal).hide();
      }
    }
  });
  
  // Add swipe support for mobile devices with enhanced sensitivity
  let touchStartX = 0;
  let touchEndX = 0;
  let touchStartTime = 0;
  
  lightboxImage.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartTime = new Date().getTime();
  });
  
  lightboxImage.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const swipeThreshold = 30; // Reduced threshold for better sensitivity
    const timeThreshold = 300; // Time threshold for quick swipes
    const swipeTime = new Date().getTime() - touchStartTime;
    
    if (Math.abs(touchStartX - touchEndX) > swipeThreshold && swipeTime < timeThreshold) {
      if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left - next image
        nextBtn.click();
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right - previous image
        prevBtn.click();
      }
    }
  }
});

// Logo gallery lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
  const logoLinks = document.querySelectorAll('.logo-link');
  const logoLightboxImage = document.getElementById('logoLightboxImage');
  const logoPrevBtn = document.querySelector('.lightbox-prev');
  const logoNextBtn = document.querySelector('.lightbox-next');
  let logoImages = [];
  let currentLogoIndex = 0;
  
  // Accessibility enhancement for logo lightbox modal
  const logoLightboxModal = document.getElementById('logoLightboxModal');
  if (logoLightboxModal) {
    logoLightboxModal.addEventListener('shown.bs.modal', function () {
      // When modal is shown, ensure proper focus management
      this.setAttribute('aria-hidden', 'false');
    });
    
    logoLightboxModal.addEventListener('hidden.bs.modal', function () {
      // When modal is hidden, reset aria-hidden
      this.setAttribute('aria-hidden', 'true');
    });
  }
  
  // Collect all logo images
  document.querySelectorAll('#logos .logo-gallery-item img').forEach(function(img, index) {
    logoImages.push({
      src: img.src,
      alt: img.alt
    });
  });
  
  // Open lightbox when logo is clicked
  logoLinks.forEach(function(link, index) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      // Use data-index if available, otherwise use the loop index
      const dataIndex = link.getAttribute('data-index');
      currentLogoIndex = dataIndex !== null ? parseInt(dataIndex) : index;
      updateLogoLightboxImage();
    });
  });
  
  // Update logo lightbox image with enhanced transition
  function updateLogoLightboxImage() {
    if (logoImages[currentLogoIndex]) {
      // Add enhanced slide and fade effect with direction awareness
      logoLightboxImage.classList.add('fade-out');
      
      setTimeout(function() {
        logoLightboxImage.src = logoImages[currentLogoIndex].src;
        logoLightboxImage.alt = logoImages[currentLogoIndex].alt;
        
        // Remove fade-out immediately to allow image to show
        logoLightboxImage.classList.remove('fade-out');
        
        // Add directional slide effect
        logoLightboxImage.style.transform = 'scale(1.02) translateZ(0)';
        setTimeout(() => {
          logoLightboxImage.style.transform = 'scale(1) translateZ(0)';
        }, 300);
        
        // Handle image loading errors
        logoLightboxImage.onerror = function() {
          console.error('Failed to load image:', logoImages[currentLogoIndex].src);
        };
      }, 350);
    }
  }
  
  // Previous logo button functionality with enhanced animation
  if (logoPrevBtn) {
    logoPrevBtn.addEventListener('click', function() {
      currentLogoIndex = (currentLogoIndex > 0) ? currentLogoIndex - 1 : logoImages.length - 1;
      updateLogoLightboxImage();
      addNavigationEffect(logoPrevBtn, 'left');
    });
  }
  
  // Next logo button functionality with enhanced animation
  if (logoNextBtn) {
    logoNextBtn.addEventListener('click', function() {
      currentLogoIndex = (currentLogoIndex < logoImages.length - 1) ? currentLogoIndex + 1 : 0;
      updateLogoLightboxImage();
      addNavigationEffect(logoNextBtn, 'right');
    });
  }
  
  // Add visual feedback for navigation buttons with directional effect
  function addNavigationEffect(button, direction) {
    // Add directional transform effect
    if (direction === 'left') {
      button.style.transform = 'translateX(-10px) scale(0.85) translateZ(0)';
    } else {
      button.style.transform = 'translateX(10px) scale(0.85) translateZ(0)';
    }
    
    button.style.boxShadow = '0 0 15px var(--primary-theme)';
    setTimeout(() => {
      button.style.transform = 'translateX(0) scale(1) translateZ(0)';
      button.style.boxShadow = 'none';
    }, 300);
  }
  
  // Keyboard navigation for logo lightbox
  document.addEventListener('keydown', function(e) {
    const logoLightboxModal = document.getElementById('logoLightboxModal');
    if (logoLightboxModal && logoLightboxModal.classList.contains('show')) {
      if (e.key === 'ArrowLeft') {
        if (logoPrevBtn) logoPrevBtn.click();
      } else if (e.key === 'ArrowRight') {
        if (logoNextBtn) logoNextBtn.click();
      } else if (e.key === 'Escape') {
        const modalInstance = bootstrap.Modal.getInstance(logoLightboxModal);
        if (modalInstance) modalInstance.hide();
      }
    }
  });
  
  // Add swipe support for mobile devices with enhanced sensitivity
  let touchStartX = 0;
  let touchEndX = 0;
  let touchStartTime = 0;
  
  if (logoLightboxImage) {
    logoLightboxImage.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartTime = new Date().getTime();
    });
    
    logoLightboxImage.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  }
  
  function handleSwipe() {
    const swipeThreshold = 30; // Reduced threshold for better sensitivity
    const timeThreshold = 300; // Time threshold for quick swipes
    const swipeTime = new Date().getTime() - touchStartTime;
    
    if (Math.abs(touchStartX - touchEndX) > swipeThreshold && swipeTime < timeThreshold) {
      if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left - next image
        if (logoNextBtn) logoNextBtn.click();
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right - previous image
        if (logoPrevBtn) logoPrevBtn.click();
      }
    }
  }
});

// Go to Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
  const goTopBtn = document.getElementById('goTopBtn');
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      goTopBtn.style.display = 'block';
    } else {
      goTopBtn.style.display = 'none';
    }
  });
  
  // Scroll to top when button is clicked
  goTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// Gallery Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter gallery items
      galleryCards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          const categories = card.getAttribute('data-category');
          if (categories && categories.includes(filterValue)) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        }
      });
    });
  });
});
