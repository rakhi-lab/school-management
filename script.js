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

// SMS Notication
  function showLottie(id) {
    const container = document.getElementById(id);
    container.style.display = "block";

    lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'https://assets10.lottiefiles.com/packages/lf20_touohxv0.json' 
    });
  }

 
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
