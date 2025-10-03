// Header hero section
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

// fixed button
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
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

    let count = 0;
  const target = 1024;
  const flip = document.getElementById("flipCounter");
  const interval = setInterval(() => {
    count += 8;
    flip.textContent = count.toString().padStart(4, '0');
    if (count >= target) clearInterval(interval);
  }, 40);
  

  // navbar
 
  // Scroll-active links
  // const sections = document.querySelectorAll('[data-scroll]');
  // const navLinks = document.querySelectorAll('.nav-link');

  // window.addEventListener('scroll', () => {
  //   let current = '';
  //   sections.forEach(section => {
  //     const sectionTop = section.offsetTop - 80;
  //     if (pageYOffset >= sectionTop) current = section.getAttribute('href');
  //   });

  //   navLinks.forEach(link => {
  //     link.classList.remove('active');
  //     if (link.getAttribute('href') === current) link.classList.add('active');
  //   });
  // });


// navbar shrink on scroll
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("shrink");
    } else {
      $(".navbar").removeClass("shrink");
    }
  });



  // youtube section

  const carousel = document.getElementById('youtubeCarousel');
  let scrollAmount = 0;
  const scrollStep = 300; // pixels to scroll each time
  const scrollInterval = 3000; // time in ms between scrolls

  setInterval(() => {
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0; // reset to start
    } else {
      scrollAmount += scrollStep;
    }
    carousel.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, scrollInterval);



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



