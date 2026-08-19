console.log("hello world");

const header = document.querySelector(".header");
const btnToggle = document.getElementById("btn_toggle");
const btnClose = document.getElementById("btn_close");
const odometerItems = document.querySelectorAll(".counter-item > h3");
const form = document.querySelector(".contact form");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY >= header.clientHeight);
});

btnToggle.addEventListener("click", () => {
  document.body.classList.toggle("mobile-visible");
});
btnClose.addEventListener("click", () => {
  document.body.classList.toggle("mobile-visible");
});

$(".services-container").slick({
  dots: false,
  infinite: true,
  nav: false,
  speed: 300,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".testimonials-slider").slick({
  dots: false,
  infinite: true,
  nav: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  arrows: true,
  prevArrow: '<button class="prev">‹</button>',
  nextArrow: '<button class="next">›</button>',
});

const odometerObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const elem = entry.target;
      const value = elem.dataset.value;

      setTimeout(() => {
        elem.innerHTML = value;
      }, 300);

      observer.unobserve(elem);
    });
  },
  {
    threshold: 0.4,
  },
);

odometerItems.forEach((item) => odometerObserver.observe(item));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("test");
});
