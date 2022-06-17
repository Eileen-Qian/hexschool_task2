function initSwiper() {
    const swiper = new Swiper("#comment-swiper", {
      slidesPerView: 1,
      breakpoints: {
        992: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2
        },
        0: {
          slidesPerView: 1
        }
      },
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
  
  initSwiper();
  