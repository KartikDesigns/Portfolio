// Animate progress bars when section is visible
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".skill-progress");
  progressBars.forEach((bar) => {
    const width = bar.getAttribute("style").match(/width:\s*([\d.]+%)/)[1];
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
});

const goTopBtn = document.getElementById("goTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
};

goTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// gallery new

// Projects Gallery Lightbox (no sequence)
document.querySelectorAll(".gallery-card a").forEach(link => {
  link.addEventListener("click", function () {
    const imgSrc = this.querySelector("img").getAttribute("src");
    document.getElementById("lightboxImage").setAttribute("src", imgSrc);
  });
});

// Logo Gallery Lightbox (no sequence)
document.querySelectorAll(".logo-gallery-item a").forEach(link => {
  link.addEventListener("click", function () {
    const imgSrc = this.querySelector("img").getAttribute("src");
    document.getElementById("logoLightboxImage").setAttribute("src", imgSrc);
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    const galleryLinks = document.querySelectorAll(".gallery-card img");
    const lightboxImage = document.getElementById("lightboxImage");
    const modal = document.getElementById("lightboxModal");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;
    const images = Array.from(galleryLinks).map(img => img.src);

    // Helper: Show image with fade transition
    function showImage(index) {
      lightboxImage.classList.remove("showing");
      setTimeout(() => {
        lightboxImage.src = images[index];
        lightboxImage.onload = () => {
          lightboxImage.classList.add("showing");
        };
      }, 200);
    }

    // Open modal on click
    galleryLinks.forEach((img, index) => {
      img.addEventListener("click", function (e) {
        e.preventDefault();
        currentIndex = index;
        showImage(currentIndex);
        new bootstrap.Modal(modal).show();
      });
    });

    // Show next image
    function showNext() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    // Show previous image
    function showPrev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);

    // Keyboard navigation
    document.addEventListener("keydown", function (e) {
      if (document.querySelector("#lightboxModal.show")) {
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrev();
      }
    });
  });

   document.addEventListener("DOMContentLoaded", function () {
  const logoLinks = document.querySelectorAll(".logo-link");
  const lightboxImage = document.getElementById("logoLightboxImage");
  const prevBtn = document.querySelector(".lightbox-prev");
  const nextBtn = document.querySelector(".lightbox-next");

  const images = Array.from(logoLinks).map(link => link.querySelector("img").src);
  let currentIndex = 0;

  // Open modal with clicked image
  logoLinks.forEach(link => {
    link.addEventListener("click", function () {
      currentIndex = parseInt(this.getAttribute("data-index"));
      showImage(currentIndex);
    });
  });

  // Show image with fade + zoom effect
  function showImage(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    currentIndex = index;

    lightboxImage.classList.remove("show");
    setTimeout(() => {
      lightboxImage.src = images[currentIndex];
      lightboxImage.onload = () => {
        lightboxImage.classList.add("show");
      };
    }, 200);
  }

  // Buttons
  prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
  nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (document.getElementById("logoLightboxModal").classList.contains("show")) {
      if (e.key === "ArrowLeft") showImage(currentIndex - 1);
      if (e.key === "ArrowRight") showImage(currentIndex + 1);
    }
  });
});

// Disable right-click only on modal images (silent, no alert)
document.getElementById("lightboxImage").addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.getElementById("logoLightboxImage").addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable right-click on all images
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
});
