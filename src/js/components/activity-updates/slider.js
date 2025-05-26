import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

export const useActivityUpdatesSlider = () => {
  const wrapper = document.querySelector(".hero__slider .swiper-wrapper");
  const tabs = document.querySelectorAll(".hero__controls-btn");
  const select = document.getElementById("heroTabSelect");
  const allSlides = Array.from(document.querySelectorAll(".hero__slide"));
  let swiper;

  function createSwiper() {
    swiper = new Swiper(".hero__slider", {
      slidesPerView: "2.25",
      spaceBetween: 32,
      loop: false,
      centeredSlides: true,
      breakpoints: {
        993: {
          centeredSlides: false,
        },
        768: {
          centeredSlides: false,
          slidesPerView: 2,
        },
        576: {
          centeredSlides: false,
          slidesPerView: 1.2,
        },
        330: {
          centeredSlides: false,
          slidesPerView: 1.18,
        },
      },
    });
  }

  function updateSlides(selectedTab) {
    wrapper.innerHTML = "";

    const filteredSlides =
      selectedTab === "View all"
        ? allSlides
        : allSlides.filter((slide) => slide.dataset.slide === selectedTab);

    filteredSlides.forEach((slide) => {
      wrapper.appendChild(slide);
    });

    swiper.update();
  }

  function setActiveTab(tabName) {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.tab === tabName;
      tab.classList.toggle("hero__controls-btn--active", isActive);
    });
    if (select) {
      select.value = tabName;
    }
    updateSlides(tabName);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActiveTab(tab.dataset.tab);
    });
  });

  if (select) {
    select.addEventListener("change", () => {
      setActiveTab(select.value);
    });
  }

  createSwiper();
  setActiveTab("View all");
};

export const useArticlesSlider = () => {
  new Swiper(".articles__slider", {
    modules: [Navigation],
    slidesPerView: "2.81",
    spaceBetween: 33,
    navigation: {
      prevEl: ".articles__head-btn--prev",
      nextEl: ".articles__head-btn--next",
    },
    breakpoints: {
      993: {
        centeredSlides: false,
      },
      768: {
        centeredSlides: false,
        slidesPerView: 2,
      },
      576: {
        centeredSlides: false,
        slidesPerView: 1.2,
      },
      330: {
        centeredSlides: false,
        slidesPerView: 1.18,
      },
    },
  });
};
