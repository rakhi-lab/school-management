
// navbar
// document.addEventListener('DOMContentLoaded', function() {
//   const navbar = document.querySelector('.navbar');
//   const logo = document.querySelector('.brand-logo');

//   window.addEventListener('scroll', function() {
//     if (window.scrollY > 10) {
//       navbar.classList.add('shrink');
//       logo.classList.add('shrink');
//     } else {
//       navbar.classList.remove('shrink');
//       logo.classList.remove('shrink');
//     }
//   });
// });

$(document).ready(function(){
  $('.bottomnav-right a').click(function(){
    $('.bottomnav-right a').removeClass("active");
    $(this).addClass("active");
});
});


// Header hero section
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  document.querySelectorAll('.floating-card').forEach((el, index) => {
    el.style.transform = `translateY(${scroll*0.03*(index+1)}px)`;
  });
});

// Drop Down

function toggleMenu() {
  document.getElementById('menu').classList.toggle('active');
}

// Dropdown toggle for mobile view
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    if (window.innerWidth <= 991) {
      e.preventDefault();
      const dropdown = this.parentElement;
      dropdown.classList.toggle('active');
    }
  });
});

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
const viewport = document.getElementById('viewport');
const track = document.getElementById('track');

let paused = false;
const SPEED_PX_PER_SEC = 30; // px per second
let lastTimestamp = null;

// Clone track children for seamless loop
function ensureClones() {
  const originalChildren = Array.from(track.children).filter(c => !c.classList.contains('cloned'));
  const viewportW = viewport.clientWidth;
  while (track.scrollWidth < viewportW * 2) {
    originalChildren.forEach(node => {
      const clone = node.cloneNode(true);
      clone.classList.add('cloned');
      track.appendChild(clone);
    });
  }
}
ensureClones();
window.addEventListener('resize', ensureClones);

// Animation loop
function step(timestamp) {
  if (!lastTimestamp) lastTimestamp = timestamp;
  const delta = (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;

  if (!paused) {
    viewport.scrollLeft += SPEED_PX_PER_SEC * delta;

    const half = track.scrollWidth / 2;
    if (viewport.scrollLeft >= half) {
      viewport.scrollLeft -= half;
    }
  }

  requestAnimationFrame(step);
}
requestAnimationFrame(step);

// Pause on hover over any video card
document.querySelectorAll('.video-item').forEach(card => {
  card.addEventListener('mouseenter', () => paused = true);
  card.addEventListener('mouseleave', () => paused = false);
});

// Pause when tab is hidden
document.addEventListener('visibilitychange', () => {
  paused = document.hidden;
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

