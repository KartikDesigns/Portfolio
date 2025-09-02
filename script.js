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

//  image   arrow

