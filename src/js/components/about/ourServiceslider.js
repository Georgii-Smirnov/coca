import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export const useOurServiceSlider = () => {
  new Swiper(".our-service__slider", {
    modules: [Autoplay],
    slidesPerView: "2.56",
    spaceBetween: 32,
    loop: true,
    allowTouchMove: false,
    speed: 5000,
    autoplay: {
      delay: 0,     
    },
    breakpoints: {
      993: {
        centeredSlides: false,
      },
      576: {
        centeredSlides: false,
        slidesPerView: "1.5",
        speed: 4000,
      },
      380: {
        centeredSlides: false,
        slidesPerView: "1",
        speed: 3500,
      },
    },
  });
};
