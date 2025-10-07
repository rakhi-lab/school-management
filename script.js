
// // Navbar shrink on scroll
// window.addEventListener("scroll", function() {
//   const navbar = document.querySelector(".navbar");
//   if (window.scrollY > 50) {
//     navbar.classList.add("shrink");
//   } else {
//     navbar.classList.remove("shrink");
//   }
// });

// Initialize AOS animations
// AOS.init({ duration: 1000, once: true });



// Header hero section
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  document.querySelectorAll('.floating-card').forEach((el, index) => {
    el.style.transform = `translateY(${scroll*0.03*(index+1)}px)`;
  });
});

// Initialize AOS
// AOS.init({
//   duration: 1000,
//   easing: 'ease-in-out',
//   once: true
// });

// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
  gsap.from('#hero h1', { opacity: 0, y: -50, duration: 1 });
  gsap.from('#hero p', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
});


// testimonial swiper
  var testimonialSwiper = new Swiper(".testimonial-swiper", {
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
      nextEl: ".testimonial-next",
      prevEl: ".testimonial-prev",
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 }
    }
  });

  
// blog swiper
const blogSwiper = new Swiper(".blog-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});



 
document.querySelectorAll(".feature-categories ul li").forEach(tab => {
  tab.addEventListener("click", function() {
    // remove active from all
    document.querySelectorAll(".feature-categories ul li").forEach(li => li.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));

    // add active to clicked tab
    this.classList.add("active");
    let tabId = this.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// JS for Visitor Counter (Demo)

    let count = 0;
  const target = 1024;
  const flip = document.getElementById("flipCounter");
  const interval = setInterval(() => {
    count += 8;
    flip.textContent = count.toString().padStart(4, '0');
    if (count >= target) clearInterval(interval);
  }, 40);
  



  // youtube section
/*
  Auto X-axis scroll script:
  - Clones track children so combined width >= 2x viewport making seamless loop possible.
  - Uses requestAnimationFrame for smooth continuous scroll.
  - Pauses on hover/focus or when 'paused' toggled.
  - Adjust SPEED_PX_PER_SEC with range input.
*/

const viewport = document.getElementById('viewport');
const track = document.getElementById('track');
const toggleBtn = document.getElementById('toggleBtn');
const speedRange = document.getElementById('speedRange');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

let paused = false;
let SPEED_PX_PER_SEC = parseFloat(speedRange.value); // px per second
let lastTimestamp = null;

// make initial clones to ensure track width >= viewport width * 2
function ensureClones() {
  // remove previously cloned marker if any
  const originalChildren = Array.from(track.children);
  // simple approach: duplicate all original children once
  // but avoid repeating too many times
  const currentWidth = track.scrollWidth;
  const viewportW = viewport.clientWidth;
  if (currentWidth < viewportW * 2) {
    // clone original children once
    originalChildren.forEach(node => {
      const clone = node.cloneNode(true);
      clone.classList.add('cloned');
      track.appendChild(clone);
    });
  }
}
ensureClones();

// If window resizes, ensure clones still cover
window.addEventListener('resize', () => {
  ensureClones();
});

function step(timestamp){
  if (lastTimestamp === null) lastTimestamp = timestamp;
  const delta = (timestamp - lastTimestamp) / 1000; // seconds
  lastTimestamp = timestamp;

  if (!paused) {
    const movePx = SPEED_PX_PER_SEC * delta;
    viewport.scrollLeft += movePx;

    // When we've scrolled past half of the track (original set), wrap back
    // Find the width of the first set of items (we assume original items set is the first N children until clones)
    // Simpler: when scrollLeft >= track.scrollWidth / 2 -> subtract track.scrollWidth / 2
    const half = track.scrollWidth / 2;
    if (viewport.scrollLeft >= half) {
      viewport.scrollLeft -= half;
    }
  }

  requestAnimationFrame(step);
}
requestAnimationFrame(step);

// Hover/focus to pause
viewport.addEventListener('mouseenter', ()=> paused = true);
viewport.addEventListener('mouseleave', ()=> paused = false);
viewport.addEventListener('focusin', ()=> paused = true);
viewport.addEventListener('focusout', ()=> paused = false);

// Toggle button
toggleBtn.addEventListener('click', () => {
  paused = !paused;
  toggleBtn.textContent = paused ? 'Play' : 'Pause';
});

// Speed control
speedRange.addEventListener('input', e => {
  SPEED_PX_PER_SEC = parseFloat(e.target.value);
});

// small manual scroll buttons
scrollLeftBtn.addEventListener('click', () => {
  viewport.scrollLeft = Math.max(0, viewport.scrollLeft - 300);
});
scrollRightBtn.addEventListener('click', () => {
  viewport.scrollLeft = viewport.scrollLeft + 300;
});

// Accessibility: pause on keyboard interactions (space/enter on buttons handled by default)
document.addEventListener('visibilitychange', () => {
  // pause when tab not visible to reduce CPU
  paused = document.hidden;
  toggleBtn.textContent = paused ? 'Play' : 'Pause';
});



// tesimonial
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // 👇 important configs
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,     // cursor hand banega
    simulateTouch: true,  // mouse/touch drag enable
    touchRatio: 1,        // default drag sensitivity
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
});

