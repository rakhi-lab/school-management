// Header
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  document.querySelectorAll('.floating-card').forEach((el, index) => {
    el.style.transform = `translateY(${scroll*0.03*(index+1)}px)`;
  });
});



// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
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

// Monthly/Yearly toggle
const toggle = document.getElementById('togglePrice');
toggle.addEventListener('change', function() {
  document.querySelectorAll('.price').forEach(p => {
    let val = parseInt(p.textContent.replace('₹',''));
    if(toggle.checked){
      p.textContent = '₹' + Math.round(val * 12 * 0.9); // yearly 10% discount
    } else {
      p.textContent = '₹' + Math.round(val / 0.9 / 12); // back to monthly
    }
  });
});


// JS for Visitor Counter (Demo)

  // let count = 1250; // Example starting count
  // const counter = document.getElementById("visitorCount");
  
  // function updateCounter() {
  //   count++;
  //   counter.textContent = count.toLocaleString();
  // }

  // // Increment every 5 seconds (demo)
  // setInterval(updateCounter, 5000);
  
  // // Initial display
  // counter.textContent = count.toLocaleString();

    let count = parseInt(localStorage.getItem("visitorCount")) || 1000;
  count++;
  document.getElementById("visitorCount").innerText = count;
  localStorage.setItem("visitorCount", count);

  
  // navbar
 
  // Scroll-active links
  const sections = document.querySelectorAll('[data-scroll]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) current = section.getAttribute('href');
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === current) link.classList.add('active');
    });
  });

  // youtube section
  const carousel = document.querySelector('.youtube-carousel');
const cards = document.querySelectorAll('.youtube-card');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let scrollPos = 0;
let cardWidth = cards[0].offsetWidth + 20; // width + gap

// Infinite auto-scroll using requestAnimationFrame
function animateCarousel() {
  scrollPos += 1; // pixels per frame
  if(scrollPos >= carousel.scrollWidth / 2) scrollPos = 0;
  carousel.scrollLeft = scrollPos;
  requestAnimationFrame(animateCarousel);
}
requestAnimationFrame(animateCarousel);

// Buttons
nextBtn.addEventListener('click', () => { scrollPos += cardWidth; });
prevBtn.addEventListener('click', () => { scrollPos -= cardWidth; if(scrollPos<0) scrollPos=0; });

// Click-to-select highlight
cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
  });
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



