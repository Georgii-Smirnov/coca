import Swiper from "swiper";
import "swiper/css";
export const useTeamBlockSlider = () => {
  new Swiper(".team-block__slider", {
    slidesPerView: "auto",
    spaceBetween: 32,
    loop: true,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
      993: {
        centeredSlides: false,
      },
      768: {
        centeredSlides: false,
        slidesPerView: "2.1",
      },
      576: {
        slidesPerView: "1.5",
      },
      380: {
        centeredSlides: false,
        slidesPerView: "1",
      },
    },
  });
};
