/* Venus and Moon Cosmic Theme CSS */

/* CSS Variables for Venus and Moon color scheme */
:root {
  /* Theme variables (will be updated by JavaScript) */
  --primary-theme: #f5f3ce;
  --secondary-theme: #e0ddaf;
  --accent-theme: #d5d19f;

  /* Venus colors - warm, soft tones */
  --venus-primary: #ffcab0;
  --venus-secondary: #ffd8cc;
  --venus-accent: #ffc4b3;

  /* Moon colors - cool, serene tones */
  --moon-primary: #f5f3ce;
  --moon-secondary: #e0ddaf;
  --moon-accent: #d5d19f;

  /* Cosmic neutrals */
  --cosmic-dark: #1a1a2e;
  --cosmic-darker: #0d0d1a;
  --cosmic-light: #f8f8f8;

  /* Gradient backgrounds */
  --venus-gradient: linear-gradient(135deg, var(--venus-primary), var(--venus-secondary));
  --moon-gradient: linear-gradient(135deg, var(--moon-primary), var(--moon-secondary));
  /* Updated cosmic gradient for a more subtle, classy appearance */
  --cosmic-gradient: linear-gradient(135deg, 
    var(--cosmic-darker) 0%, 
    var(--cosmic-darker) 25%, 
    #16162a 40%, 
    var(--cosmic-dark) 60%, 
    var(--cosmic-dark) 80%, 
    #121225 100%);
  /* Updated theme gradient with 75% Venus and 25% Moon for a classy, balanced blend */
  --theme-gradient: linear-gradient(135deg, 
    var(--venus-primary) 0%, 
    var(--venus-primary) 25%, 
    var(--venus-secondary) 35%, 
    var(--venus-secondary) 50%, 
    var(--moon-primary) 60%, 
    var(--moon-primary) 75%, 
    var(--moon-secondary) 85%, 
    var(--moon-secondary) 100%);
}

/* Base styles */
body {
  background: var(--cosmic-gradient);
  color: var(--cosmic-light);
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  transition: background 0.3s ease;
}

/* Preloader */
#preloader {
  background: var(--cosmic-gradient);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
  visibility: visible;
}

#preloader.hidden {
  opacity: 0;
  visibility: hidden;
}

.preloader-text {
  color: var(--primary-theme);
  font-family: 'Orbitron', sans-serif;
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(255, 202, 176, 0.5);
  animation: textGlow 2s infinite alternate;
}

@keyframes textGlow {
  from {
    text-shadow: 0 0 5px var(--venus-primary), 0 0 10px var(--venus-primary);
  }
  to {
    text-shadow: 0 0 8px var(--moon-primary), 0 0 15px var(--moon-primary);
  }
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: var(--primary-theme);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  box-shadow: 0 0 10px var(--primary-theme);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Enhanced spinner with cosmic particles */
.spinner::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--venus-primary);
  border-radius: 50%;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px var(--venus-primary);
  animation: particleOrbit 2s linear infinite;
}

.spinner::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--moon-primary);
  border-radius: 50%;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 8px var(--moon-primary);
  animation: particleOrbit 3s linear infinite reverse;
}

@keyframes particleOrbit {
  0% {
    transform: translateX(-50%) rotate(0deg) translateX(30px) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) rotate(360deg) translateX(30px) rotate(-360deg);
  }
}

/* Navbar */
.navbar {
  background: rgba(26, 26, 46, 0.9) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--primary-theme);
}

.navbar-brand {
  color: var(--primary-theme) !important;
  font-family: 'Orbitron', sans-serif;
}

.nav-link {
  color: var(--secondary-theme) !important;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary-theme) !important;
  text-shadow: 0 0 8px rgba(255, 202, 176, 0.7);
}

/* Hero section */
.hero-section {
  background: var(--theme-gradient);
  padding: 3rem 1rem;
  border-radius: 20px;
  margin: 2rem;
  box-shadow: 0 0 30px rgba(245, 243, 206, 0.2);
  transition: all 0.3s ease;
}

/* Hero image */
.hero-img {
  border: 5px solid var(--primary-theme);
  box-shadow: 0 0 20px rgba(255, 202, 176, 0.5);
  width: 50% !important;
  max-width: 100px !important;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
  margin: 0 auto;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* Venus and Moon blend effect */
.hero-img::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  /* Updated blend effect with 75% Venus and 25% Moon balance */
  background: linear-gradient(135deg,
    var(--venus-primary) 0%,
    var(--venus-secondary) 25%,
    var(--venus-secondary) 50%,
    var(--moon-primary) 60%,
    var(--moon-secondary) 75%,
    var(--moon-secondary) 100%);
  opacity: 0.3;
  mix-blend-mode: overlay;
  z-index: 1;
  pointer-events: none;
  animation: colorShift 8s infinite alternate;
}

.hero-img::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  /* Subtler radial gradient for a more classy appearance */
  background: radial-gradient(circle at center,
    var(--venus-primary) 0%,
    transparent 70%);
  opacity: 0.15;
  mix-blend-mode: soft-light;
  z-index: 2;
  pointer-events: none;
  transform: rotate(0deg);
  animation: rotateGlow 15s linear infinite;
}

@keyframes colorShift {
  0% {
    background: linear-gradient(135deg,
      var(--venus-primary) 0%,
      var(--venus-secondary) 25%,
      var(--venus-secondary) 50%,
      var(--moon-primary) 60%,
      var(--moon-secondary) 75%,
      var(--moon-secondary) 100%);
  }
  50% {
    background: linear-gradient(135deg,
      var(--moon-primary) 0%,
      var(--moon-secondary) 25%,
      var(--venus-primary) 40%,
      var(--venus-primary) 60%,
      var(--venus-secondary) 75%,
      var(--venus-secondary) 100%);
  }
  100% {
    background: linear-gradient(135deg,
      var(--venus-secondary) 0%,
      var(--moon-primary) 15%,
      var(--moon-primary) 35%,
      var(--venus-primary) 50%,
      var(--venus-primary) 75%,
      var(--moon-secondary) 100%);
  }
}

@keyframes rotateGlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.hero-section h1 {
  color: var(--cosmic-dark);
  font-family: 'Orbitron', sans-serif;
}

.hero-section h2 {
  color: var(--cosmic-darker);
}

.hero-btn {
  background: var(--theme-gradient) !important;
  border: none;
  color: var(--cosmic-dark) !important;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(255, 202, 176, 0.5);
}

.hero-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(255, 202, 176, 0.8);
}

/* Sections */
section {
  padding: 3rem 1rem;
}

section h2 {
  color: var(--primary-theme);
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(255, 202, 176, 0.5);
  transition: color 0.3s ease;
}

/* About section */
#about p {
  background: rgba(255, 243, 206, 0.1);
  color: white;
  padding: 1.5rem;
  border-radius: 15px;
  border-left: 4px solid var(--primary-theme);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  transition: all 0.3s ease;
}

/* Projects gallery */
.gallery-section {
  background: rgba(26, 26, 46, 0.5);
  border-radius: 20px;
  margin: 2rem;
  padding: 2rem !important;
  transition: all 0.3s ease;
  overflow: hidden;
}

.gallery-title {
  color: var(--secondary-theme) !important;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
}

.gallery-card {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: var(--cosmic-dark);
  aspect-ratio: 4/3;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: translateZ(0);
  will-change: transform;
}

.gallery-card:hover {
  transform: translateY(-10px) rotateY(5deg) translateZ(0);
  box-shadow: 0 15px 30px rgba(255, 202, 176, 0.3);
}

.gallery-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: none;
  transform: scale(1) translateZ(0);
  will-change: transform;
}

.gallery-card:hover img {
  transform: scale(1.05) translateZ(0);
  opacity: 0.8;
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--theme-gradient);
  color: var(--cosmic-dark);
  padding: 1rem;
  transform: translateY(100%) translateZ(0);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-weight: 600;
  text-align: center;
  opacity: 0;
  will-change: transform, opacity;
}

.gallery-card:hover .gallery-overlay {
  transform: translateY(0) translateZ(0);
  opacity: 1;
}

/* Logo gallery */
.logo-gallery-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: var(--cosmic-dark);
  aspect-ratio: 1/1;
  max-width: 100%;
  margin: 0 auto;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: translateZ(0);
  will-change: transform;
}

.logo-gallery-item:hover {
  transform: scale(1.05) rotateY(5deg) translateZ(0);
  box-shadow: 0 10px 25px rgba(245, 243, 206, 0.3);
}

.logo-gallery-item img {
  width: 100%;
  height: 100%;
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: none;
  object-fit: contain;
  padding: 15px;
  transform: scale(1) translateZ(0);
  will-change: transform;
}

.logo-gallery-item:hover img {
  transform: scale(1.1) translateZ(0);
  opacity: 0.8;
}

.logo-name-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--theme-gradient);
  color: var(--cosmic-dark);
  padding: 0.75rem;
  transform: translateY(100%) translateZ(0);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-weight: 600;
  text-align: center;
  opacity: 0;
  will-change: transform, opacity;
}

.logo-gallery-item:hover .logo-name-overlay {
  transform: translateY(0) translateZ(0);
  opacity: 1;
}

/* Enhanced gallery entrance animations */
@keyframes slideInLeft {
  from {
    transform: translateX(-50px) translateZ(0);
    opacity: 0;
  }
  to {
    transform: translateX(0) translateZ(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(50px) translateZ(0);
    opacity: 0;
  }
  to {
    transform: translateX(0) translateZ(0);
    opacity: 1;
  }
}

@keyframes slideInUp {
  from {
    transform: translateY(30px) translateZ(0);
    opacity: 0;
  }
  to {
    transform: translateY(0) translateZ(0);
    opacity: 1;
  }
}

.gallery-card:nth-child(odd) {
  animation: slideInLeft 0.6s ease-out forwards;
}

.gallery-card:nth-child(even) {
  animation: slideInRight 0.6s ease-out forwards;
}

.logo-gallery-item:nth-child(odd) {
  animation: slideInLeft 0.6s ease-out forwards;
}

.logo-gallery-item:nth-child(even) {
  animation: slideInRight 0.6s ease-out forwards;
}

/* Staggered animations */
.gallery-card:nth-child(1) { animation-delay: 0.1s; }
.gallery-card:nth-child(2) { animation-delay: 0.2s; }
.gallery-card:nth-child(3) { animation-delay: 0.3s; }
.gallery-card:nth-child(4) { animation-delay: 0.4s; }
.gallery-card:nth-child(5) { animation-delay: 0.5s; }
.gallery-card:nth-child(6) { animation-delay: 0.6s; }
.gallery-card:nth-child(7) { animation-delay: 0.7s; }
.gallery-card:nth-child(8) { animation-delay: 0.8s; }

.logo-gallery-item:nth-child(1) { animation-delay: 0.1s; }
.logo-gallery-item:nth-child(2) { animation-delay: 0.2s; }
.logo-gallery-item:nth-child(3) { animation-delay: 0.3s; }
.logo-gallery-item:nth-child(4) { animation-delay: 0.4s; }
.logo-gallery-item:nth-child(5) { animation-delay: 0.5s; }
.logo-gallery-item:nth-child(6) { animation-delay: 0.6s; }
.logo-gallery-item:nth-child(7) { animation-delay: 0.7s; }
.logo-gallery-item:nth-child(8) { animation-delay: 0.8s; }

/* Skills section */
#skills {
  background: rgba(245, 243, 206, 0.1);
  border-radius: 20px;

  transition: all 0.3s ease;
}

.skill-item {
  margin-bottom: 1.5rem;
}

.skill-item span:first-child {
  color: var(--primary-theme);
  font-weight: 500;
}

.skill-item span:last-child {
  color: var(--secondary-theme);
  font-weight: 600;
}

.skill-bar {
  height: 10px;
  background: var(--cosmic-dark);
  border-radius: 5px;
  margin-top: 0.5rem;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: var(--theme-gradient);
  border-radius: 5px;
  position: relative;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Contact section */
.contact-section {
  background: var(--cosmic-gradient);
  border-radius: 20px;
  margin: 2rem;
  transition: all 0.3s ease;
}

.email-highlight {
  background: var(--theme-gradient) !important;
  color: var(--cosmic-dark) !important;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid var(--primary-theme) !important;
}

.email-highlight:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(255, 202, 176, 0.5) !important;
}

.email-highlight i {
  color: var(--cosmic-darker);
}

/* Footer */
footer {
  background: rgba(26, 26, 46, 0.9);
  border-top: 1px solid var(--primary-theme);
}

.kartik-highlight {
  color: var(--primary-theme);
  font-weight: 600;
}

/* Social media icons */
.fa-instagram {
  color: var(--venus-primary) !important;
  transition: all 0.3s ease;
}

.fa-linkedin {
  color: var(--moon-primary) !important;
  transition: all 0.3s ease;
}

.fa-github {
  color: var(--moon-secondary) !important;
  transition: all 0.3s ease;
}

.fa-pinterest {
  color: var(--venus-accent) !important;
  transition: all 0.3s ease;
}

/* Hover effects for social icons */
.fa-instagram:hover,
.fa-linkedin:hover,
.fa-github:hover,
.fa-pinterest:hover {
  transform: scale(1.2);
  text-shadow: 0 0 10px currentColor;
}

/* Go to top button */
#goTopBtn {
  background: var(--theme-gradient) !important;
  border: none;
  color: var(--cosmic-dark) !important;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 30px;
  box-shadow: 0 0 15px rgba(255, 202, 176, 0.5);
  display: none;
  z-index: 1000;
  transition: all 0.3s ease;
}

#goTopBtn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(255, 202, 176, 0.8);
}

/* Lightbox modal */
.modal-content {
  background: rgba(26, 26, 46, 0.95) !important;
  border: none !important;
  border-radius: 10px;
  transform: scale(0.7) translateZ(0);
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  will-change: transform, opacity;
}

.modal.show .modal-content {
  transform: scale(1) translateZ(0);
  opacity: 1;
}

.lightbox-img {
  border: none;
  border-radius: 5px;
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
  max-height: 80vh;
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  margin: 0 auto;
  transform: scale(0.8) translateZ(0);
  opacity: 0;
  will-change: transform, opacity;
}

.modal.show .lightbox-img {
  transform: scale(1) translateZ(0);
  opacity: 1;
}

.lightbox-img.fade-out {
  transform: scale(0.8) translateZ(0);
  opacity: 0;
}

.btn-primary {
  background: var(--theme-gradient) !important;
  border: none !important;
  color: var(--cosmic-dark) !important;
  transition: all 0.3s ease;
  transform: scale(1);
}

.btn-primary:hover {
  box-shadow: 0 0 15px var(--primary-theme) !important;
  transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    margin: 1rem;
    padding: 2rem 1rem;
  }

  .gallery-section {
    margin: 1rem;
    padding: 1rem !important;
  }

  #skills {
    margin: 1rem;
  }

  .contact-section {
    margin: 1rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .gallery-card img {
    max-height: 200px;
  }

  .logo-gallery-item {
    max-width: 200px;
  }

  .hero-img {
    max-width: 180px;
  }

  #theme-toggle {
    top: 5px;
    right: 5px;
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
}

/* ==============================
   Logo Lightbox Image Transition
============================== */
#logoLightboxImage {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.6s ease, transform 0.6s ease;
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

#logoLightboxImage.show {
  opacity: 1;
  transform: scale(1);
}

#logoLightboxImage.fade-out {
  opacity: 0;
  transform: scale(0.95);
}

.kartik-highlight {
  background: linear-gradient(135deg, #c2b6ff, #66a6ff); /* cold gradient */
  color: #ffffff; /* deep navy for contrast */
  padding: 3px 10px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(102, 166, 255, 0.4); /* icy glow */
  font-weight: bold; /* bold text */
}

  #about p {
    font-size: 1.25rem; /* ya 20px / ya 1.5rem */
    line-height: 1.7;   /* text ko readable banane ke liye */
  }

/* Preloader Container */
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff; /* Keep it clean, matches portfolio background */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Spinner Animation */
.spinner {
  border: 6px solid #e0e0e0; /* Light grey for contrast */
  border-top: 6px solid #007bff; /* Portfolio primary blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

/* Spinner Keyframes */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Preloader Text */
.preloader-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  color: #007bff; /* Match primary portfolio color */
  font-weight: 600;
  text-align: center;
}

/* Optional: subtle fade-out animation when loader finishes */
#preloader.loaded {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

/* ==============================
end css styles
============================== */

/* Accessibility enhancements for focus states */
.btn:focus,
button:focus {
  outline: 2px solid var(--primary-theme);
  outline-offset: 2px;
}

.modal-content:focus {
  outline: none;
}

/* Ensure proper contrast for accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
